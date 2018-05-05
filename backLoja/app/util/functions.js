function Functions () {
	
}

Functions.prototype.search = function(search1,search2) {
	search1 = search1.toLowerCase();
	search2 = search2.toLowerCase();

    search1 = search1.replace(/[àáâãä]/,"a");
    search1 = search1.replace(/[éèêë]/,"e");
    search1 = search1.replace(/[íìîï]/,"i");
    search1 = search1.replace(/[óòôõö]/,"o");
    search1 = search1.replace(/[úúüû]/,"u");
    search1 = search1.replace(/[ñ]/,"n");
    search1 = search1.replace(/[ç]/,"c");

    search2 = search2.replace(/[àáâãä]/,"a");
    search2 = search2.replace(/[éèêë]/,"e");
    search2 = search2.replace(/[íìîï]/,"i");
    search2 = search2.replace(/[óòôõö]/,"o");
    search2 = search2.replace(/[úúüû]/,"u");
    search2 = search2.replace(/[ñ]/,"n");
    search2 = search2.replace(/[ç]/,"c");

    if(search1.indexOf(search2) >= 0) return true;
    else return false;
};

module.exports = Functions;