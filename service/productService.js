angular.module("ecommerce").factory("productService", function($http) {
    var url = "htpp://ecommerce-cpw.herokuapp.com/rest";

    var _buscarProdutoPorIdCategoria = function (idCategoria, pagina) {
        return $http.get(url+"/product/list/"+idCategoria+"/"+pagina);
    };

    return {
        buscarProdutoPorIdCategoria : _buscarProdutoPorIdCategoria
    }
});