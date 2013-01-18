let s:plugin_root_dir  = expand("<sfile>:h")

function! s:JsBeautifySimple () range
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
        execute a:firstline . "," . a:lastline . "!" . s:engine . " " . fnameescape(s:plugin_lib_dir . "/beautify.js") . s:filetype . s:config . " -"
    else
        " Executable bin doesn't exist
        echoerr('Unable to run ' . s:engine . '.')
        return 1
    endif
endfunction

command -range=% JsBeautifySimple <line1>,<line2>call s:JsBeautifySimple()
