cask :v1 => 'font-iosevka' do
  version '1.0.0'
  sha256 '66df1ac32e0e702c9666d30112db139be3d10da042c99c1c701d1e8f27121d22'

  url 'https://github.com/be5invis/Iosevka/releases/download/v1.0.0/iosevka-1.0.0.tar.bz2'
  name 'Iosevka'
  homepage 'https://github.com/be5invis/Iosevka/releases/download/v1.0.0/iosevka-1.0.0.tar.bz2'
  license :ofl

  font 'iosevka-bolditalic.ttf'
  font 'iosevka-regular.ttf'
  font 'iosevka-bold.ttf'
  font 'iosevka-italic.ttf'
end
