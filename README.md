js-format
---------
Vim plugin to format JavaScript, HTML and CSS.

Powered by [js-beautify](https://github.com/einars/js-beautify).

### Usage
```
:JsFormat
```

Works with a region, or by default the whole file.

Consider using a mapping such as:
```
autocmd FileType javascript nmap <silent> <buffer> <F1> :JsFormat<cr>
autocmd FileType javascript vmap <silent> <buffer> <F1> :JsFormat<cr>
```

### Configuration
Optionally set the config file with b:JsFormat_config

Consider an autocmd to set the config:

```
autocmd FileType javascript let b:JsFormat_config = "~/.js-beautify.json"
```

Configuration options and their defaults. Override just what you need:

```
{
    "indent_size": 4,
    "indent_char": " ",
    "indent_level": 0,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "max_preserve_newlines": 10,
    "jslint_happy": false,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false
}
```

### Addenda
Requires nodejs.

Inspired by https://github.com/maksimr/vim-jsbeautify.

### License
MIT.
