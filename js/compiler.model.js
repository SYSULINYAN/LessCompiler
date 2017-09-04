var LessCompiler = function () {
    this.input = [];
    this.output = [];
    this.controller = null;
};

/**
 * Register controller that interacts with the view
 */

LessCompiler.prototype.register = function (ctrl) {
    this.controller = ctrl;
};

LessCompiler.prototype.unregister = function () {
    this.controller = null;
}
/**
 *  Parse the input from controller into a format that 
 *  the compiler would understand
 */
LessCompiler.prototype.parseInput = function () {
    if (typeof this.controller !== 'function') {
        return;
    }
    // assume input is an array of lines of strings
    var input = this.controller.readInput();
    // match brackets and construct objects
};

/**
 * Format the result CSS rules into a string for display
 */
LessCompiler.prototype.formatOutput = function () {
    if (typeof this.controller !== 'function') {
        return;
    }
    this.output.forEach(function (output) {
        // recursively construct output string
        var prefix = '';
        this._recursiveGenerateOutput(prefix, output);
    })
};

LessCompiler.prototype._recursiveGenerateOutput = function (prefix, input) {
    var print = false;
    var deferred = [];
    for (var key in input) {
        // if the value is a string, that means the (key, value) pair here
        // is a rule in CSS
        if (typeof input[key] === 'string') {
            if (!print) {
                print = true;
                this.output.push(prefix + " {");
            }
            this.output.push(key + ": " + input[key] + ";");
        }
        // if the value is an object, that means the key is a selector in CSS
        // defer the formatting until all primitive values are visited
        else if (typeof input[key] === 'object') {
            deferred.push(key);
        }
    }
    if (print) {
        this.output.push("}");
    }
    for (var i = 0; i < deferred.length; i ++) {
        this._recursiveGenerateOutput(prefix + deferred[i], input[key])
    }
};

/**
 * Format the simple hierarchical Less rules into simple 
 * CSS rules
 */
LessCompiler.prototype.parseHierarchy = function () {

};

/**
 * Replace all variable with primitive value that is
 * recognizable to CSS
 */
LessCompiler.prototype.replaceVariable = function () {

}

/**
 * Execute all formula that CSS does not understand
 */
LessCompiler.prototype.executeCalculation = function () {

}

LessCompiler.prototype.run = function () {
    this.parseInput();
    if (this.input.length === 0) {
        return;
    }
    this.input.forEach(function () {
        this.replaceVariable();
        this.parseHierarchy();
        this.executeCalculation();
    });
    this.formatOutput();
}

var lessCompiler = new LessCompiler();
lessCompiler.register(new Controller());