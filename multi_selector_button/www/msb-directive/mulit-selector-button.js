/**
 * Created by alfonso on 24/06/16.
 */
/**
 * Created by alfonso on 24/09/15.
 */
app.directive('multiSelection', function($ionicModal) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'msb-directive/multi-selector-button.html',
    scope:{
      selectedobj:'=selectedobj',
      section:'@',
      listobj:'@',
      placeholder:'@',
      modalcallback:'=modalcallback',
      manipulation:'&'

    },
    link: function(scope, element, attrs)
    {
      scope.listobj=JSON.parse(scope.listobj);
      scope._objs_all=scope.manipulation()(scope.selectedobj,scope.listobj);

      //PLACEHOLDER FILTER PATOLOGIE
      scope.placeholder="Inserisci patologia";
      scope.searchField=""


      //MODALVIEW ---------------------------------------------------
      $ionicModal.fromTemplateUrl('msb-directive/modal-list.html', {
        scope: scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        scope.modal = modal;
      });


      scope.modalcallback = function() {
        scope.modal.show();
      };

      scope.closeModal = function() {
        scope.modal.hide();
      };

      //Cleanup the modal when we're done with it!
      scope.$on('$destroy', function() {
        scope.modal.remove();
      });

      // Execute action on hide modal
      scope.$on('modal.hidden', function() {
        // Execute action
      });

      // Execute action on remove modal
      scope.$on('modal.removed', function() {
        // Execute action
      });
      //MODALVIEW ---------------------------------------------------


      //FILTER BAR
      scope._cancel = function()
      {
        scope.searchField=""
        alert("_cancel")

      }

      scope._done = function()
      {
        alert("_done")
      }

      //FILTER BAR
      scope.removeSelected=function(obj)
      {
        var i= scope.selectedobj.indexOf(obj);
        scope.selectedobj.splice(i, 1);

        obj.selected=false;
        scope._objs_all.push(obj);

        scope.selectedobj=scope.selectedobj;

      }

      scope.addSelected=function(obj)
      {
        var i= scope._objs_all.indexOf(obj);
        scope._objs_all.splice(i, 1);

        obj.selected=true;
        scope.selectedobj.push(obj);

        scope.selectedobj=scope.selectedobj;

      }


    }

  };
});




