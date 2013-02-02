let s:plugin_root_dir  = expand("<sfile>:h")

function! s:JsBeautifySimple (line1, line2) range
    let s:plugin_lib_dir  = s:plugin_root_dir . "/lib/"

    if exists("g:JsBeautifySimple_engine")
        let s:engine = g:JsBeautifySimple_engine
    else
        let s:engine = "node"
    endif

    if exists("b:JsBeautifySimple_config")
        let s:config = " -c " . b:JsBeautifySimple_config . " "
    else
        let s:config = ""
    endif

    if exists("b:JsBeautifySimple_filetype")
        let s:filetype = " -t " . b:JsBeautifySimple_filetype . " "
    else
        " Use the file extension.
        let s:filetype = " -t " . expand("%:e")
    endif

    if executable(s:engine)
        let cursor_position = getpos('.')
        execute a:line1 . "," . a:line2 . "!" . s:engine . " " . fnameescape(s:plugin_lib_dir . "/beautify.js") . s:filetype . s:config . " -"
        call setpos('.', cursor_position)
    else
        " Executable bin doesn't exist
        echoerr('Unable to run ' . s:engine . '.')
        return 1
    endif

endfunction

command! -range=% JsBeautifySimple call s:JsBeautifySimple(<line1>, <line2>)

autocmd FileType html let b:JsBeautifySimple_filetype = "html"
autocmd FileType javascript let b:JsBeautifySimple_filetype = "js"
autocmd FileType css let b:JsBeautifySimple_filetype = "css"
