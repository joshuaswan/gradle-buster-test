/**
 * Created by joshua on 2016/9/20.
 */
var myapp = this.myapp || {};
myapp.services = app.services || {};
(function () {
    myapp.services.DummyService = function (my) {
        my.listTodos = function(success, error) {
            $.get('/todos/list')
                .done(function(data) {
                    success(data);
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    error("Error getting todos")
                });
        };
        return my;
    }(myapp.services.DummyService || {});
}());
