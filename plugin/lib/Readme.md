Beautify JavaScript, HTML and CSS files in vim.

Usage:
	:JsBeautifySimple

Works with a region, or by default the whole file.

Consider using a mapping such as:

    autocmd FileType javascript nmap <silent> <buffer> <F1> :JsBeautifySimple<cr>
    autocmd FileType javascript vmap <silent> <buffer> <F1> :JsBeautifySimple<cr>

Requires node executable.

Insired by https://github.com/maksimr/vim-jsbeautify.
