import nunjucks from 'nunjucks';

export default (app) => {
	nunjucks.configure('server/views', {
    autoescape: true,
    noCache: true,
    express: app
	});
}
