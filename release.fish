#!/usr/bin/env fish

set mount_dir (mktemp -d)
set font_version (jq -r .version package.json)

echo "Preparing to release IosevkaLyteTerm version $font_version..."

# choose a host
read -s --prompt 'echo "First, select a target remote release host. Press enter when ready."'
set release_host (rg '^Host' ~/.ssh/config | awk '{print $2}' | fzf)

# mount home directory
echo "Mounting home directory of target remote release host to $mount_dir..."
sshfs -o follow_symlinks $release_host: $mount_dir

# choose directory to upload to
read -s --prompt 'echo "Next, select a remote directory with in nnn via Space+q. Press enter when ready."'
pushd $mount_dir &>/dev/null
set release_dir (nnn -p -)
if test ! -d $release_dir
    read -s --prompt 'echo "You selected an invalid directory. Select a remote directory with in nnn via Space+q. Press enter when ready to try again."'
    set release_dir (nnn -p -)
end
popd &>/dev/null

echo "Copying to $release_dir..."
rsync --force --progress iosevkalyteterm-$font_version.tar.zstd $release_dir/
rsync --force --progress LICENSE.md $release_dir/iosevkalyteterm-$font_version-LICENSE.md

# cleanup
fusermount -u $mount_dir
rmdir $mount_dir
echo "Done!"