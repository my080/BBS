"use strict";

const Topic = require("../core/Topic");
const Domain = require("cqrs");
const should = require("should");

describe('Topic', function () {
    var domain = new Domain();
    domain.register(Topic);
    var topicId;
    it('#create', function (done) {
       domain.create('Topic', {title: 'myTitle', body: 'mybody'}, function (err, topic) {
           should.exist(topic.id);
           topicId = topic.id;
           topic.top.should.eql(false);
           done();
       });
    });

    it('#top', function (done) {
        domain.call('Topic.${topicId}.top');
        let topic = domain.get('Topic',topicId);
        domain.get('Topic',topicId).then(function (json) {
            try {
                json.top.should.eql(true);
            } catch (e) {
                console.log(e);
            }
        });
        done();
    });

    it('#top', function (done) {
        domain.call('Topic.${topicId}.untop');
        let topic = domain.get('Topic',topicId);
        domain.get('Topic',topicId).then(function (json) {
            try {
                json.top.should.eql(false);
            } catch (e) {
                console.log(e);
            }
        });
        done();
    });
})
