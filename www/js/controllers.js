angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopover, $ionicModal) {
  // Form data for the login modal
  $scope.loginData = {};

  var template = '<ion-popover-view><ion-header-bar><h1 class="title">Buscar</h1></ion-header-bar><ion-content>Hello!</ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

   //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);

  };
})

.controller('VistaInicio', function($scope, $ionicSlideBoxDelegate) {
  $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    }
})

.controller('ListaPropiedades', function($scope) {
  $scope.currentPage = 1;
  $scope.pageSize = 3;

  $scope.propiedades = [
    { imagen: 'img/casa1.jpg', titulo: 'Jean Paul Jenny' , codigo: 'ACR0404', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa4.jpg', titulo: 'Santo Domingo' , codigo: 'ACR0468', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$120,000.00'},
    { imagen: 'img/casa5.jpg', titulo: 'Villa Fontana Sur' , codigo: 'ACR0469', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$180,000.00'},
    { imagen: 'img/casa6.jpg', titulo: 'Estancia Santo Domingo' , codigo: 'ACR0483', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$90,000.00'},
    { imagen: 'img/casa7.jpg', titulo: 'Cumbres' , codigo: 'ACR0497', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa8.jpg', titulo: 'Villa Fontana Sur' , codigo: 'ACR0499', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa9.jpg', titulo: 'Las Colinas' , codigo: 'ACR0500', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa10.jpg', titulo: 'Jean Paul Jenny' , codigo: 'ACR0404', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa11.jpg', titulo: 'Colegio Americano' , codigo: 'ACR002', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa1.jpg', titulo: 'Jean Paul Jenny' , codigo: 'ACR0404', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa4.jpg', titulo: 'Santo Domingo' , codigo: 'ACR0468', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$120,000.00'},
    { imagen: 'img/casa5.jpg', titulo: 'Villa Fontana Sur' , codigo: 'ACR0469', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$180,000.00'},
    { imagen: 'img/casa6.jpg', titulo: 'Estancia Santo Domingo' , codigo: 'ACR0483', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$90,000.00'},
    { imagen: 'img/casa7.jpg', titulo: 'Cumbres' , codigo: 'ACR0497', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa8.jpg', titulo: 'Villa Fontana Sur' , codigo: 'ACR0499', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa9.jpg', titulo: 'Las Colinas' , codigo: 'ACR0500', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa10.jpg', titulo: 'Jean Paul Jenny' , codigo: 'ACR0404', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa11.jpg', titulo: 'Colegio Americano' , codigo: 'ACR002', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa1.jpg', titulo: 'Jean Paul Jenny' , codigo: 'ACR0404', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa4.jpg', titulo: 'Santo Domingo' , codigo: 'ACR0468', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$120,000.00'},
    { imagen: 'img/casa5.jpg', titulo: 'Villa Fontana Sur' , codigo: 'ACR0469', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$180,000.00'},
    { imagen: 'img/casa6.jpg', titulo: 'Estancia Santo Domingo' , codigo: 'ACR0483', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$90,000.00'},
    { imagen: 'img/casa7.jpg', titulo: 'Cumbres' , codigo: 'ACR0497', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa8.jpg', titulo: 'Villa Fontana Sur' , codigo: 'ACR0499', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa9.jpg', titulo: 'Las Colinas' , codigo: 'ACR0500', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa10.jpg', titulo: 'Jean Paul Jenny' , codigo: 'ACR0404', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa11.jpg', titulo: 'Colegio Americano' , codigo: 'ACR002', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa1.jpg', titulo: 'Jean Paul Jenny' , codigo: 'ACR0404', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa4.jpg', titulo: 'Santo Domingo' , codigo: 'ACR0468', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$120,000.00'},
    { imagen: 'img/casa5.jpg', titulo: 'Villa Fontana Sur' , codigo: 'ACR0469', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$180,000.00'},
    { imagen: 'img/casa6.jpg', titulo: 'Estancia Santo Domingo' , codigo: 'ACR0483', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$90,000.00'},
    { imagen: 'img/casa7.jpg', titulo: 'Cumbres' , codigo: 'ACR0497', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa8.jpg', titulo: 'Villa Fontana Sur' , codigo: 'ACR0499', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa9.jpg', titulo: 'Las Colinas' , codigo: 'ACR0500', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa10.jpg', titulo: 'Jean Paul Jenny' , codigo: 'ACR0404', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'},
    { imagen: 'img/casa11.jpg', titulo: 'Colegio Americano' , codigo: 'ACR002', info: '0 vrs² / 0 mt² / 3 H / 3B / 2 VEH', descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe, architecto ipsa ad magni dolor mollitia doloremque. Magnam aspernatur vitae maiores hic voluptatum fugit reprehenderit commodi, maxime sit! Atque, error?', precio:'U$150,000.00'}
  ];


})

.controller ('Paginacion', function($scope) {
  $scope.pageChangeHandler = function(num) {
  };
})

.controller('DetallesPropiedad', function($scope, $ionicSlideBoxDelegate, $ionicModal) {

  $scope.Imagenes = [{
        'src' : 'img/casa1.jpg', 
        'msg' : ''
      }, {
        'src' : 'img/casa2.jpg', 
        'msg' : ''
      }, { 
        'src' : 'img/casa3.jpg', 
        'msg' : ''
    }];

  $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    }

  $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
 
    $scope.openModal = function() {
      $scope.modal.show();
      // Important: This line is needed to update the current ion-slide's width
      // Try commenting this line, click the button and see what happens
      $ionicSlideBoxDelegate.update();
    };
 
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
 
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

})


.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.canciones = [
    { title: 'Passenger - Let her go', id: 1 },
    { title: 'Whiz Khalifa - See you again', id: 2 },
    { title: 'Magic - Rude', id: 3 },
  ];
});
