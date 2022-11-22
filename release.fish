#!/usr/bin/env fish

set mount_dir (mktemp -d)
set font_version (jq -r .version package.json)

# choose a host
set release_host (rg '^Host' ~/.ssh/config | awk '{print $2}' | fzf)

# mount home directory
sshfs -o follow_symlinks $release_host: $mount_dir

# choose directory to upload to
read -s --prompt 'echo "Select a remote directory with Space+q. Ready?"'
pushd $mount_dir &>/dev/null
set release_dir (nnn -p -)
popd &>/dev/null

rsync --progress -r iosevkalyteterm-$font_version.tar.zstd $release_dir/
rsync --progress -r LICENSE.md $release_dir/iosevkalyteterm-$font_version-LICENSE.md

# cleanup
fusermount -u $mount_dir
rmdir $mount_dir