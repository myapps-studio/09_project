process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var nodeVersion = process.versions.node;
    var nodeLang = process.env.LANG;

    if (input !== null) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case 'version':
                // jęz. systemowy
                process.stdout.write(nodeVersion);
                process.exit();
            break;
            case 'lang':
                // node version
                process.stdout.write(nodeLang);
                process.exit();
            break;
            case '/exit':
                process.stderr.write('Wrong instruction! You use exit!');
                process.exit();
            break;
            default:
                process.stderr.write('Wrong instruction!');
        }
    }
});