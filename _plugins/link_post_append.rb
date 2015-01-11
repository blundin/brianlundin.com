module Jekyll
  module PermalinkFilter
    def link_post_append(input, url)
      input + "<a href='#{url}' title='Permalink'>Permalink</a>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::PermalinkFilter)
