require 'html-proofer'

# Set "rake watch" as default task
task :default => :test

desc "build and test website"
task :test do
  HTMLProofer.check_directory("./docs", {
    :empty_alt_ignore => true,
    :url_ignore => [],
    :cache => {
      :timeframe => '1d'
    },
    :typhoeus => {
      :followlocation => true,
      :ssl_verifypeer => false,
      :headers => { 'User-Agent' => 'html-proofer' }
    }
  }).run
end
