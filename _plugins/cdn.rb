module Jekyll
  module AssetFilter
    def cdn(input)
      cdn_url = @context.registers[:site].config['cdn']
      if cdn_url
        "#{cdn_url}#{input}"
      else
        "#{input}"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
