# This plugin implements a simple cdn filter for Liquid templates
#
# If there is a value set for "cdn_url" in _config.yml or the pages front
# matter, the input url ('/js/modernizr/modernizr.min.js' in the example below)
# will have the CDN base url prepended to it.
#
# Example: <script async src="{{ '/js/modernizr/modernizr.min.js' | cdn }}"></script>

module Jekyll
  module AssetFilter
    def cdn(input)
      cdn_url = @context.registers[:site].config['cdn_url']
      if cdn_url
        "#{cdn_url}#{input}"
      else
        "#{input}"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
