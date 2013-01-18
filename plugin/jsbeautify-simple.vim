let s:plugin_root_dir  = expand("<sfile>:h")

function JsBeautifySimple () range
    let s:plugin_lib_dir  = s:plugin_root_dir . "/lib/"

    if exists("g:JsBeautifySimple_engine")
        let s:engine = g:JsBeautifySimple_engine
    else
        let s:engine = "node"
    endif

    if executable(s:engine)
        execute a:firstline . "," . a:lastline . "!" . s:engine . " " . fnameescape(s:plugin_lib_dir . "/beautify.js") . " -"
    else
        " Executable bin doesn't exist
        echoerr('Unable to run ' . s:engine . '.')
        return 1
    endif
endfunction

command -range=% JsBeautifySimple <line1>,<line2>call JsBeautifySimple()
nmap <C-f> :JsBeautifySimple<cr>
vmap <C-f> :JsBeautifySimple<cr>

" TODO: The config file should be customizable.
" TODO: The mapping should not be specified here.
