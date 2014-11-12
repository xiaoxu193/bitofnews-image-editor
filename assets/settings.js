var MEME_SETTINGS = {
  creditText: 'Source:', // Default "credits" text.
  creditSize: 12, // Font size for credit text.
  downloadName: 'share', // The name of the downloaded image file (will have a ".png" extension added).
  fontColor: 'white', // Universal font color.

  // Universal font family for texts:
  // Note that you'll need to included quoted font names as you would in CSS, ie: '"Knockout 28 B"'.
  fontFamily: 'Helvetica Neue',
  // Font family options: set to empty array to disable font selector.
  // These options may also be formatted as {text:'Knockout', value:'"Knockout 28 B"'}.
  fontFamilyOpts: ['Arial', 'Helvetica Neue', 'Comic Sans MS'],
  
  // Font size of main headline:
  fontSize: 16,
  // Font size options: set to empty array to disable font-size selector.
  fontSizeOpts: [
    {text: 'Small text', value: 16},
    {text: 'Medium text', value: 24},
    {text: 'Large text', value: 36}
  ],

  headlineText: 'Write your own headline', // Default headline text.
  height: 262, // Canvas rendering height.
  imageScale: 1, // Background image scale.
  imageSrc: '', // Default background image path. MUST reside on host domain, or use base64 data.
  overlayAlpha: 0.5, // Opacity of image overlay.

  // Image overlay color, or blank ('') for no overlay:
  overlayColor: '#000',
  // Overlay color options: set to empty array to disable overlay options selector.
  overlayColorOpts: ['#000', '#777', '#2980b9', '#FF5C5C'],
  paddingRatio: 0.04, // Percentage of canvas width to use as edge padding.
  
  // Text alignment: valid settings are "left", "center", and "right".
  textAlign: 'left',
  // Text alignment options: set to empty array to disable alignment picker.
  textAlignOpts: [
    {text: 'Align left', value: 'left'}, 
    {text: 'Align center', value: 'center'},
    {text: 'Align right', value: 'right'}
  ],

  textShadow: false, // Text shadow toggle.
  textShadowEdit: true, // Toggles text shadow control within the editor.
  watermarkAlpha: 1, // Opacity of watermark image.
  watermarkMaxWidthRatio: 0.25, // Maximum allowed width of watermark (percentage of total canvas width).

  // Path to the watermark image source, or blank for no watermark:
  // Alternatively, use 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA6CAYAAAB79J21AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw%2FeHBhY2tldCBiZWdpbj0i77u%2FIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2BIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkEzNzFGRUYyRDYyMTFFNDkyNjJGQjQ1MDE0MUM4NEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkEzNzFGRjAyRDYyMTFFNDkyNjJGQjQ1MDE0MUM4NEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTM3MUZFRDJENjIxMUU0OTI2MkZCNDUwMTQxQzg0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTM3MUZFRTJENjIxMUU0OTI2MkZCNDUwMTQxQzg0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI%2FPtuFzNgAAAohSURBVHja7Fx5bBZFFJ8WyiUChcoVUloRRKHhiOFoBRRQAQEroCABDIiBIqjc%2F4gE5RIBFWIQi0Ag4ZD7kkNEUEBAOYy00ArlsOUqZwVbjvbzvez7ZLPZ3Tl2erov%2BbXftzvzZnbeNzPvmg0JBAJTGGMvAcoBqgFCWP5QAHATcIe%2BrwFMs5QZAnibPodQf8optncL8DcgE9CZ%2FV8JBGxGA8C%2BgF7KAowE1LS0JYIwQDdAikR7qwDNFNoqkQjBPxaqDjgDqKDpN%2FQ8YLdHHlUA%2BwFPuZS5BxgMWMp8%2Bo9Cba5dAWzTxP%2BwBuEyWtqHudy%2FD%2BjhC1dMwEhHNfE%2FrbGv%2BEM563APhb%2FFF6e4gNM18S%2Bvub9HbK4tAizwRSkn4AxN%2FKtr7u8ty%2FdzgHd9MZYcAVexfE8A3PbFWHgCfkxzf582fd4A2OqL0J3szKQg4cx4REMbaG5la%2BBTA3CRHCAPAI0Aqb4I1WYw0oUitky%2FzB562Rb6wvUu4KK2D%2Fc12bxTfNGVLAFHMcMjhoTOjPO%2B6EqWgBOor3mAT3yxFS0Be9WkUdELRpjW%2BntvyVOyBgHC6fM0X2Qla4kuBXifPu9g9q5Kn1yodBEXMEaIHvdnry1FAPoA2gAiAWHMCPOuB6wA5GIhN0cHVrjLvGd4YGSquWLdg4AWgAOA1pJ1sd%2FoDGnCDA9YTUAlQBlmZJWg0%2BQkYB8gOZ%2BEgM%2F9OiAOUIcZWS2oQ2wCLGYPs1tkCOXyAWAscw7mHAJ0B1zmZQRc0pDRka6YjdDGxKO7YJ1QwIuAJZa%2BnwD0BkQDIgE9AWmm%2B6cBEwBVNWVStBfIjMkAdJTki%2F3bKzjuB3A8eAwPaxDwXcVBWk%2F1jwNCOGXLAkYAztq0nwyobFOnIeCBpewtSi8KVexzTUoZEqX79GMT4V0JcERy7HvzmG7SlJdVWXKgMDcsl%2Br245R9A%2FCXS9utXerud6izExAu2WdcZTIVxiYb0ERgZdqmwHtZKGe9LyxFaxRp%2BGdJYbCjWsyIJi2j%2Fc2Ovgf84tKOU8ZJB8BPpMiIaPozmBHdilAYG8waXcSxaD5kRuarLEUXRQGjY2QAff6UGZEjKz1HylsnDq9Ezv37LvcaAzaSUuZElUhhGutxfJoB%2Bjvca0VKlQrdLYoCfoe0w8vMiBpZqR%2FNzBocPqihbuaU4aUUoebuFNjAVWMv05dzPd7mGv64vmFGfrcKpRQ1AeOAB7MnPwfkWO4PBSzh2O%2FM5BjhxaHDBfiMBMRYrjUi0y2GTElcYuMBLQGTgzaoJGFKcFsboUcS3z8VeH7HUxxiNClZEwQVlSFU%2FiZpjeZ7fQB5Em0OFmjvqCCvdaY6rQDX6fpGMrusfBMUx2meiUc0KWAj6XtbG63fjdA0LCVid%2BmguQKDHWI6wTDVci%2BOzC0ZihRo84ogr9VUHu3W24B7gGEc3js8%2BgzWkZBKm64NFeSTQz9EJjKrsjUIeIVAO6%2BYzIbqpuvVOGaQHZ0SaK%2B8IK%2FNgDLUvxw6itNegH9zxbFC%2B7yDi4OnF%2BCqS%2F3LVJ%2BJCviUBgHvEmjnZyr7peX6KoX2EgXaayzAZyMJty85JXDraCFhG%2B9S6DtuU38AfuQ4PdCxs4VWvTQqPw5QxVxWpJN7NAj4OKeNlibPTpTpehfF9hIEnqunwKoTRgMedLrESzo%2F%2Bij0%2FSK111yH2zRUQBPLKAAtejT9X8EeHk8pRZq07jCoWWt1ornMyAEbA%2FjKxE%2FWXNmgUAeDIvN1hUZFBkJH4L%2BaS1vRFBbESMt003Uc4PqK7VUVKNPY5loumUXvAWYBpto8hwyhmaZyZmpSQQT8dc7gUBc33kiaregRSjJdH%2BehvWiBMk0s368zIzUXZ%2BxyU6KBmVSO1K5XqPNEcROw0zKNjoZBNgH9lg4zTITSAM9wyqCgGpi%2B7wE0BRwD%2FADo7VAvoNCf7QqOj1bFUcB2yXeYLYlJdbvJMxSk%2Fh7aSaQfR12XMk3p2W%2BQaxRTcuvRvhfLcX%2FK0k0KwMtQbEmYwehnHWEze5lH%2F24iKWojXMrUBkwkoWKe9WyaubU5vK8p9mmnZPk4XQIWUbXLaPJmjbDwHUjXD1uuR3loI9Xk8UFvU6zLc1UADJfMWolSNFc6KDzLkwVlJuG7L67mwwwe7TB7m3to41f6%2FzUt%2B9tJWapJihzO0K6Aecw45D5XICoVJDyMp3qiYj8nNGlH7Qtqic4PW7gzRWRSmJHMLmqf8ug3%2Bp9Hphcuu58xI8HuAT3HJopKhUvyPkp8VSibyb8W4wUdAi4tIeAmGgU8hv7PsBm0SA9tHLbMuHiaCfE0e%2B%2BQudZFgfcej8%2BPmSUtJMpjVkmYwswvtBkc1KKb0aCnM%2Fu34lRSVSccZskuZrzmoRfgTVo1VGirBgHLEI5Du%2BK4RAf33lkOv07V93OlCboFn1XgnW4x41TokEKdHgUl4AuaBFyHnAjXmHO%2BVI4i%2F98FylSkFUSWlnrYf4OEpw4yJev0kthGC30GV2aG%2BxE7PMfFaZCpyP%2B4oH0pO2ConM3X8Py4LVVR2Na6FBcBIw0h5WeuS5lTiryTBMqo7GmYlnvO9L0jM6JEaDrmkoa%2BguN9QlNsOZmcsjQsvx0diAiNLyedyWkrVpFvY4HnOCjJEzM46lFdTJ1ZwCn%2FqcMpjHWUHvSq4rPFqDo6ZArnaDrGUlvgDbM3JPligLwch29lyaQ1a27YQsE6Ey3t9qDrr9GzZSmM23qJs1nKAj6jQcCJgm0lSvI9L8AzXpJnEuVtydbFrJT6VK8i5ZOtNfVjreLYdeM8XzU6mBYj66rUtQ%2FnkWNDhOZI8j4rUEZGWUFNvi97mFc9QdJ5NJQ%2Bf0z27HDT%2FdWK47cY0NDhXmty06I8U1X2YMRKj7N3peT%2BsUzmkJVASm6GIK88Wk6DdesqPGsS5Zk9sAmyVFDYgoKEh9sG0HYTTkdll1OfT5KupLxEz%2FYo4KaSAq4lcVrvCw6vOA9Rr04Kz4rL9Dk6vWh3FHVmQC9h5msd1WiSjiUaXzB%2BTLIOmh%2F9mP3hMytlce6LJBCgyfOWjQmn8oaD0mTDDnJwkKAX7x9Npifa%2F22ZwyugZQTsxZul%2Bn6N7TRIvJSXAMen25dTHw%2B64UnFhRrtcnTJnnT58U7VINwd5Hq94NUODp6NUaF9GgLXXTn71jyXuh9x%2BrcGUIPTfnI%2BWAth9JoFFcK9fRKePdJpB9dT7EzXgJ73XtSlYyR2lOKw17VwOdN0SPAICpN0UCwVGXiTnnFacjyPyJyucHvLjpXwJPpeySUkg2KxAaaP2tHyh2ZPKdN1zOKYTMtVBEVippEPPEiYGotnhucpRIfGEz%2BnPRlNKjyoPVuSL76p4FuBKBfutdPJ5Skc%2BJARcFGjYOAeBwazKKNImGXJ351FgYtkGpz9hFwPbWI66yhSaiKojROkRGJ07JKHmABG2QYyI%2BX3UWZkY6bSpFqnGq78V4ABAEV6VJiQtKheAAAAAElFTkSuQmCC' to populate the watermark with base64 data, avoiding Cross-Origin issues.
  watermarkSrc: (localStorage && localStorage.getItem('meme_watermark')) || '/assets/bit-square.png',
  
  // Watermark image options: set to empty array to disable watermark picker.
  // NOTE: only populate the "data" attributes with base64 data when concerned about Cross-Origin requests...
  // Otherwise, just leave "data" attributes blank and allow images to load from your server.
  watermarkOpts: [
    {text: 'Bit of News', value: 'assets/bit-square.png', data: 'data:image/png;base64,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'},
    {text: 'Vox', value: '/images/vox.png', data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA6CAYAAAB79J21AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw%2FeHBhY2tldCBiZWdpbj0i77u%2FIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2BIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkEzNzFGRUYyRDYyMTFFNDkyNjJGQjQ1MDE0MUM4NEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkEzNzFGRjAyRDYyMTFFNDkyNjJGQjQ1MDE0MUM4NEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTM3MUZFRDJENjIxMUU0OTI2MkZCNDUwMTQxQzg0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTM3MUZFRTJENjIxMUU0OTI2MkZCNDUwMTQxQzg0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI%2FPtuFzNgAAAohSURBVHja7Fx5bBZFFJ8WyiUChcoVUloRRKHhiOFoBRRQAQEroCABDIiBIqjc%2F4gE5RIBFWIQi0Ag4ZD7kkNEUEBAOYy00ArlsOUqZwVbjvbzvez7ZLPZ3Tl2erov%2BbXftzvzZnbeNzPvmg0JBAJTGGMvAcoBqgFCWP5QAHATcIe%2BrwFMs5QZAnibPodQf8optncL8DcgE9CZ%2FV8JBGxGA8C%2BgF7KAowE1LS0JYIwQDdAikR7qwDNFNoqkQjBPxaqDjgDqKDpN%2FQ8YLdHHlUA%2BwFPuZS5BxgMWMp8%2Bo9Cba5dAWzTxP%2BwBuEyWtqHudy%2FD%2BjhC1dMwEhHNfE%2FrbGv%2BEM563APhb%2FFF6e4gNM18S%2Bvub9HbK4tAizwRSkn4AxN%2FKtr7u8ty%2FdzgHd9MZYcAVexfE8A3PbFWHgCfkxzf582fd4A2OqL0J3szKQg4cx4REMbaG5la%2BBTA3CRHCAPAI0Aqb4I1WYw0oUitky%2FzB562Rb6wvUu4KK2D%2Fc12bxTfNGVLAFHMcMjhoTOjPO%2B6EqWgBOor3mAT3yxFS0Be9WkUdELRpjW%2BntvyVOyBgHC6fM0X2Qla4kuBXifPu9g9q5Kn1yodBEXMEaIHvdnry1FAPoA2gAiAWHMCPOuB6wA5GIhN0cHVrjLvGd4YGSquWLdg4AWgAOA1pJ1sd%2FoDGnCDA9YTUAlQBlmZJWg0%2BQkYB8gOZ%2BEgM%2F9OiAOUIcZWS2oQ2wCLGYPs1tkCOXyAWAscw7mHAJ0B1zmZQRc0pDRka6YjdDGxKO7YJ1QwIuAJZa%2BnwD0BkQDIgE9AWmm%2B6cBEwBVNWVStBfIjMkAdJTki%2F3bKzjuB3A8eAwPaxDwXcVBWk%2F1jwNCOGXLAkYAztq0nwyobFOnIeCBpewtSi8KVexzTUoZEqX79GMT4V0JcERy7HvzmG7SlJdVWXKgMDcsl%2Br245R9A%2FCXS9utXerud6izExAu2WdcZTIVxiYb0ERgZdqmwHtZKGe9LyxFaxRp%2BGdJYbCjWsyIJi2j%2Fc2Ovgf84tKOU8ZJB8BPpMiIaPozmBHdilAYG8waXcSxaD5kRuarLEUXRQGjY2QAff6UGZEjKz1HylsnDq9Ezv37LvcaAzaSUuZElUhhGutxfJoB%2Bjvca0VKlQrdLYoCfoe0w8vMiBpZqR%2FNzBocPqihbuaU4aUUoebuFNjAVWMv05dzPd7mGv64vmFGfrcKpRQ1AeOAB7MnPwfkWO4PBSzh2O%2FM5BjhxaHDBfiMBMRYrjUi0y2GTElcYuMBLQGTgzaoJGFKcFsboUcS3z8VeH7HUxxiNClZEwQVlSFU%2FiZpjeZ7fQB5Em0OFmjvqCCvdaY6rQDX6fpGMrusfBMUx2meiUc0KWAj6XtbG63fjdA0LCVid%2BmguQKDHWI6wTDVci%2BOzC0ZihRo84ogr9VUHu3W24B7gGEc3js8%2BgzWkZBKm64NFeSTQz9EJjKrsjUIeIVAO6%2BYzIbqpuvVOGaQHZ0SaK%2B8IK%2FNgDLUvxw6itNegH9zxbFC%2B7yDi4OnF%2BCqS%2F3LVJ%2BJCviUBgHvEmjnZyr7peX6KoX2EgXaayzAZyMJty85JXDraCFhG%2B9S6DtuU38AfuQ4PdCxs4VWvTQqPw5QxVxWpJN7NAj4OKeNlibPTpTpehfF9hIEnqunwKoTRgMedLrESzo%2F%2Bij0%2FSK111yH2zRUQBPLKAAtejT9X8EeHk8pRZq07jCoWWt1ornMyAEbA%2FjKxE%2FWXNmgUAeDIvN1hUZFBkJH4L%2BaS1vRFBbESMt003Uc4PqK7VUVKNPY5loumUXvAWYBpto8hwyhmaZyZmpSQQT8dc7gUBc33kiaregRSjJdH%2BehvWiBMk0s368zIzUXZ%2BxyU6KBmVSO1K5XqPNEcROw0zKNjoZBNgH9lg4zTITSAM9wyqCgGpi%2B7wE0BRwD%2FADo7VAvoNCf7QqOj1bFUcB2yXeYLYlJdbvJMxSk%2Fh7aSaQfR12XMk3p2W%2BQaxRTcuvRvhfLcX%2FK0k0KwMtQbEmYwehnHWEze5lH%2F24iKWojXMrUBkwkoWKe9WyaubU5vK8p9mmnZPk4XQIWUbXLaPJmjbDwHUjXD1uuR3loI9Xk8UFvU6zLc1UADJfMWolSNFc6KDzLkwVlJuG7L67mwwwe7TB7m3to41f6%2FzUt%2B9tJWapJihzO0K6Aecw45D5XICoVJDyMp3qiYj8nNGlH7Qtqic4PW7gzRWRSmJHMLmqf8ug3%2Bp9Hphcuu58xI8HuAT3HJopKhUvyPkp8VSibyb8W4wUdAi4tIeAmGgU8hv7PsBm0SA9tHLbMuHiaCfE0e%2B%2BQudZFgfcej8%2BPmSUtJMpjVkmYwswvtBkc1KKb0aCnM%2Fu34lRSVSccZskuZrzmoRfgTVo1VGirBgHLEI5Du%2BK4RAf33lkOv07V93OlCboFn1XgnW4x41TokEKdHgUl4AuaBFyHnAjXmHO%2BVI4i%2F98FylSkFUSWlnrYf4OEpw4yJev0kthGC30GV2aG%2BxE7PMfFaZCpyP%2B4oH0pO2ConM3X8Py4LVVR2Na6FBcBIw0h5WeuS5lTiryTBMqo7GmYlnvO9L0jM6JEaDrmkoa%2BguN9QlNsOZmcsjQsvx0diAiNLyedyWkrVpFvY4HnOCjJEzM46lFdTJ1ZwCn%2FqcMpjHWUHvSq4rPFqDo6ZArnaDrGUlvgDbM3JPligLwch29lyaQ1a27YQsE6Ey3t9qDrr9GzZSmM23qJs1nKAj6jQcCJgm0lSvI9L8AzXpJnEuVtydbFrJT6VK8i5ZOtNfVjreLYdeM8XzU6mBYj66rUtQ%2FnkWNDhOZI8j4rUEZGWUFNvi97mFc9QdJ5NJQ%2Bf0z27HDT%2FdWK47cY0NDhXmty06I8U1X2YMRKj7N3peT%2BsUzmkJVASm6GIK88Wk6DdesqPGsS5Zk9sAmyVFDYgoKEh9sG0HYTTkdll1OfT5KupLxEz%2FYo4KaSAq4lcVrvCw6vOA9Rr04Kz4rL9Dk6vWh3FHVmQC9h5msd1WiSjiUaXzB%2BTLIOmh%2F9mP3hMytlce6LJBCgyfOWjQmn8oaD0mTDDnJwkKAX7x9Npifa%2F22ZwyugZQTsxZul%2Bn6N7TRIvJSXAMen25dTHw%2B64UnFhRrtcnTJnnT58U7VINwd5Hq94NUODp6NUaF9GgLXXTn71jyXuh9x%2BrcGUIPTfnI%2BWAth9JoFFcK9fRKePdJpB9dT7EzXgJ73XtSlYyR2lOKw17VwOdN0SPAICpN0UCwVGXiTnnFacjyPyJyucHvLjpXwJPpeySUkg2KxAaaP2tHyh2ZPKdN1zOKYTMtVBEVippEPPEiYGotnhucpRIfGEz%2BnPRlNKjyoPVuSL76p4FuBKBfutdPJ5Skc%2BJARcFGjYOAeBwazKKNImGXJ351FgYtkGpz9hFwPbWI66yhSaiKojROkRGJ07JKHmABG2QYyI%2BX3UWZkY6bSpFqnGq78V4ABAEV6VJiQtKheAAAAAElFTkSuQmCC'},
    {text: 'The Verge', value: '/images/theverge.png', data: ''}
  ],

  width: 528 // Canvas rendering width.
};
