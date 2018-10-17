angular.module("ecommerce")
    .controller("productsController", function($scope,productService,$routeParams) {

        var carregarProdutos = function () {
            var id = $routeParams.idCategoria;
            productService.buscarProdutoPorIdCategoria(id,1)
                .then(function(response) {
                    $scope.produtos = response.data;
                })
                .catch(function(response){
                    alert(response.data);
                })
        }



        carregarProdutos();

    });