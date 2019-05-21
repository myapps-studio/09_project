process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var nodeVersion = process.versions.node;
    var nodeLang = process.env.LANG;

    if (input !== null) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case 'version':
                process.stdout.write(nodeVersion);
            break;
            case 'lang':
                process.stdout.write(nodeLang);
            break;
            case '/exit':
                process.stderr.write('Wrong instruction! You use exit!');
                process.exit();
            break;
        }
    }
});