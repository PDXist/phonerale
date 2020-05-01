#set($inputRoot = $input.path('$'))
#set($i = 1)
<Response>
    <Gather numDigits="1" action="/dev/action">
        <Say>$inputRoot.message</Say>
        #foreach($elem in $inputRoot.options)
            <Say>Press $i to hear $elem</Say>
            #set($i = $i + 1)
        #end
    </Gather>
</Response>