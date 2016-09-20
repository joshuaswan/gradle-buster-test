/**
 * Created by joshua on 2016/9/20.
 */
(function () {
    buster.testCase("DummyService", {
        setUp: function() {
            this.service = myapp.services.DummyService;
            this.server = sinon.fakeServer.create();
            this.success = this.spy();
            this.error = this.spy();
        },
        tearDown: function () {
            this.server.restore();
        },
        "should successfully list todos": function () {
            this.service.listTodos(this.success, this.error);
            this.server.requests[0].respond(
                200,
                { "Content-Type": "application/json" },
                JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
            );

            assert.calledOnce(this.success);
        },
        "should invoke error callback on errors": function () {
            this.service.listTodos(this.success, this.error);
            this.server.requests[0].respond(
                500,
                { "Content-Type": "application/json" },
                JSON.stringify([{ id: 1, text: "dummy", done: true }])
            );

            assert.calledOnce(this.error);
        }
    });
}());