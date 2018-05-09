# Bulmajs::Rails

Bulmajs-rails is the implementation of [BulmaJS](https://github.com/VizuaaLOG/BulmaJS)

BulmaJS is an unofficial javascript extension to the awesome [Bulma CSS framework](https://bulma.io)

Source: [https://github.com/VizuaaLOG/BulmaJS](https://github.com/VizuaaLOG/BulmaJS)

Ruby Gem: [https://rubygems.org/gems/bulmajs-rails](https://rubygems.org/gems/jquery-rails)

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'bulmajs-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install bulmajs-rails

Now you need to edit your `app/assets/javascripts/application.js` file and add the following line:

```javascript
//= require bulma
```

## Usage Examples

### Basic Tabs

```html
    <div id="tabs-example" data-bulma="tabs">
    <div class="tabs" data-links>
        <ul>
            <li class="is-active">
                <a>Pictures</a>
            </li>
            <li>
                <a>Music</a>
            </li>
            <li>
                <a>Videos</a>
            </li>
            <li>
                <a>Documents</a>
            </li>
        </ul>
    </div>

    <div class="tabs-content" data-content>
        <ul>
            <li class="is-active">
                <h1>Pictures</h1>
            </li>
            <li>
                <h1>Music</h1>
            </li>
            <li>
                <h1>Videos</h1>
            </li>
            <li>
                <h1>Documents</h1>
            </li>
        </ul>
    </div>
</div>
```

### Navbar Mobile Toggle

All you need to do is add `data-bulma="navbar"` to the main navbar div, and then add data-trigger and `data-target="navID"` to the navbar burger

```html
<nav class="navbar" data-bulma="navbar">
    <div class="navbar-brand">
        <!-- Your other HTML here -->
        <div class="navbar-burger burger" data-trigger data-target="navMenuExample">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div id="navMenuExample" class="navbar-menu">
        <!-- Your navbar HTML here -->
    </div>
</nav>
```

### Filename Updating

```html
<div class="file has-name is-boxed" data-bulma="file">
    <label class="file-label">
        <input class="file-input" type="file" name="resume" multiple>
        <span class="file-cta">
            <span class="file-icon">
                <i class="fa fa-upload"></i>
            </span>
            <span class="file-label">
                Choose a file…
            </span>
        </span>
        <span class="file-name"></span>
    </label>
</div>
```

More examples are available [here](https://vizuaalog.github.io/BulmaJS)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/theeomm/bulmajs-rails. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).