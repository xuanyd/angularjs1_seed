module.exports = function(grunt) {  
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'), 
        yeoman: {
            app: require('./bower.json').appPath || 'app',
            app_port: 9000
        },
        connect: {  
            options: {
                port: '<%= yeoman.app_port %>',
                hostname: 'localhost', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
                livereload: 35729  ,//声明给 watch 监听的端口
                keepalive:true, //保持连接
            },
            server: {
                options: {
                    open: true, //自动打开网页 http://
                    base: [
                        '<%= yeoman.app %>'  //主目录
                    ]
                }
            }
        }
    });  

    grunt.registerTask('default',[]); 
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('test', ['connect']);

};