source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "jekyll-feed", "~> 0.12"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` to `v0.6.x` on JRuby. Remove constraint once the gem and the latest JRuby release (9.3.8.0) supports http_parser.rb v0.7.0+
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
