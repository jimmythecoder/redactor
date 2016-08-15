(function($)
{
	$.Redactor.prototype.definedlinks = function()
	{
		return {
			init: function()
			{
				if (!this.opts.definedLinks) return;

				this.modal.addCallback('link', $.proxy(this.definedlinks.load, this));
			},
			load: function()
			{
				var $select = $('<select id="redactor-defined-links" />');
				$('#redactor-modal-link-insert').prepend($select);

				this.definedlinks.storage = {};
                
                this.systemLinks = [
                    {'title': '-- Please select --', 'url': ''},
                    {'title': 'Home page', 'url': '/'},
                    {'title': 'About us', 'url': '/about'},
                    {'title': 'Contact us', 'url': '/contact'},
                    {'title': 'Our work', 'url': '/our-work'}
                ];
                
				$.getJSON(this.opts.definedLinks, $.proxy(function(data)
				{
                    var allPages = this.systemLinks.concat(data);
                    
					$.each(allPages, $.proxy(function(key, val)
					{
						this.definedlinks.storage[key] = val;
						$select.append($('<option>').val(key).html(val.title));

					}, this));

					$select.on('change', $.proxy(this.definedlinks.select, this));

				}, this));

			},
			select: function(e)
			{
				var key = $(e.target).val();
				var name = '', url = '';
				if (key !== 0)
				{
					name = this.definedlinks.storage[key].title;
					url = this.definedlinks.storage[key].url || ('/page/' + this.definedlinks.storage[key].system_name);
				}

				$('#redactor-link-url').val(url);

				var $el = $('#redactor-link-url-text');
				if ($el.val() === '') $el.val(name);
			}
		};
	};
})(jQuery);