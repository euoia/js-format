Beautify JavaScript, HTML and CSS files in vim powered by js-beautify (https://github.com/einars/js-beautify).

Installation
---
Assuming you have pathogen (https://github.com/tpope/vim-pathogen) installed:

    cd ~/.vim/bundle
    git clone --recursive https://github.com/euoia/vim-jsbeautify-simple

Usage
---

    :JsBeautifySimple

Works with a region, or by default the whole file.

Consider using a mapping such as:

    autocmd FileType javascript nmap <silent> <buffer> <F1> :JsBeautifySimple<cr>
    autocmd FileType javascript vmap <silent> <buffer> <F1> :JsBeautifySimple<cr>

Config
---
Optionally set the js-beautifier config file with b:JsBeautifySimple_config

Consider an autocmd to set the config:

    autocmd FileType javascript let b:JsBeautifySimple_config = "~/.js-beautify.json"

Configuration options and their defaults:

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

Requires node executable.

Inspired by https://github.com/maksimr/vim-jsbeautify.
