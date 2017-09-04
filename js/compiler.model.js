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

/**
 *  Parse the input from controller into a format that 
 *  the compiler would understand
 */
LessCompiler.prototype.parseInput = function () {
    if (typeof this.controller !== 'function') {
        return;
    }
};

/**
 * Format the result CSS rules into a string for display
 */
LessCompiler.prototype.formatOutput = function () {
    if (typeof this.controller !== 'function') {
        return;
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
    this.replaceVariable();
    this.parseHierarchy();
    this.executeCalculation();
    this.formatOutput();
}

var lessCompiler = new LessCompiler();
lessCompiler.register(new Controller());