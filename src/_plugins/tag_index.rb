module Jekyll
  class TagIndex < Liquid::Tag
    def initialize(tag_name, input, tokens)
      @category = input
    end

    def render(input)
      site.category.each do |index|
        if index == @category
          index.last.each do |post|
            post.tags.each do |tag|
              if tag != concept
                items_html = "<li>#{tag}</li>"
              end
            end
          end
        end
      end


    end
  end
end

Liquid::Template.register_tag('tag_index_for_category', Jekyll::TagIndex)
