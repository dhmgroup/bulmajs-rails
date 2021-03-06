
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "bulmajs-rails"
  spec.version       = "0.11.0"
  spec.authors       = ["DHM Group", "Douglas Harrington Muhone"]
  spec.email         = ["doug@dhmgroup.dev"]

  spec.summary       = %q{Ruby on rails wrapper for the unofficial javascript extension to the awesome Bulma CSS framework.}
  spec.homepage      = "https://github.com/dhmgroup/bulmajs-rails"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.17"
  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency "rspec", "~> 3.8"
end
