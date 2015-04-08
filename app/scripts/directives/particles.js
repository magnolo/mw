'use strict';

/**
 * @ngdoc directive
 * @name mwApp.directive:particles
 * @description
 * # particles
 */
angular.module('mwApp')
	.directive('particles', function($timeout) {
		return {
			restrict: "A",
		template: "<canvas></canvas>",
			replace: true,
			transclude: true,
			scope: {
				particle: "@",
				count: "=",
				speed: "=",
				size: "=",
				colors: "=",
				spawn: "="
			},
			link: function postLink(scope, element, attrs) {
				var canvas = element[0];
				var context = canvas.getContext('2d');
				var dotsHolder = [];
				var mouse = {
					x: 0,
					y: 0
				};
				var colors = [
					'rgba(238, 57, 37, 1)',
					'rgba(242, 100, 37, 1)',
					'rgba(183, 38, 37, 1)',
					'rgba(247, 210, 154, 1)',
					'rgba(252, 187, 31, 1)',
					'rgba(247, 147, 32, 1)'
				];
				var mouseMove = false,
					mouseDown = false;
				var dot;
				var count = 35;
				canvas.height = window.innerHeight;
				canvas.width = window.innerWidth;

				var body = document.getElementById('body');
				body.addEventListener('mousemove', MouseMove, false);
				body.addEventListener('mousedown', MouseDown, false);
				body.addEventListener('mouseup', MouseUp, false);
				window.addEventListener('resize', canvasResize, false);
				/*if (window.innerWidth < 700) {
					count = 15;
				}*/

				function init() {
					for (var i = 0; i < count; i++) {
						dotsHolder.push(new dots());
					}
				}


				/*REQUEST ANIMATION FRAME*/
				(function() {
					var lastTime = 0;
					var vendors = ['ms', 'moz', 'webkit', 'o'];
					for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
						window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
						window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
					}

					if (!window.requestAnimationFrame)
						window.requestAnimationFrame = function(callback, element) {
							var currTime = new Date().getTime();
							var timeToCall = Math.max(0, 16 - (currTime - lastTime));
							var id = window.setTimeout(function() {
									callback(currTime + timeToCall);
								},
								timeToCall);
							lastTime = currTime + timeToCall;
							return id;
						};

					if (!window.cancelAnimationFrame)
						window.cancelAnimationFrame = function(id) {
							clearTimeout(id);
						};
				}());



				function canvasResize(event) {
					canvas.height = window.innerHeight;
					canvas.width = window.innerWidth;
					cancelAnimationFrame(animate);


				}

				function MouseUp(event) {

					if (mouseMove) {
						mouseMove = false;
					}
					if (mouseDown) {
						mouseDown = false;
					}

				}

				function MouseDown(event) {

					mouseDown = true;

				}

				function MouseMove(event) {
					mouse.x = event.pageX - canvas.offsetLeft;
					mouse.y = event.pageY - canvas.offsetTop;
					if (mouseMove) {
						context.lineTo(mouseX, mouseY);
						context.stroke();

					}
				}

				function dots() {
					this.xPos = Math.random() * canvas.width;
					this.yPos = Math.random() * canvas.height;
					this.color = colors[Math.floor(Math.random() * colors.length)];
					this.radius = Math.random() * 5;
					this.vx = Math.cos(this.radius);
					this.vy = Math.sin(this.radius);
					this.stepSize = Math.random() / 5;
					this.step = 0;
					this.friction = 7;
					this.speedX = this.vx;
					this.speedY = this.vy;


				}

				dots.draw = function() {

					context.clearRect(0, 0, canvas.width, canvas.height);
					for (var c = 0; c < dotsHolder.length; c++) {
						var dot = dotsHolder[c];
						context.beginPath();
						distanceX = dot.xPos - mouse.x;
						distanceY = dot.yPos - mouse.y;
						var particleDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
						var particleMouse = Math.max(Math.min(75 / (particleDistance / dot.radius), 2), 1);
						context.fillStyle = dot.color;
						dot.xPos += dot.vx / 4;
						dot.yPos += dot.vy / 4;
						if (dot.xPos < -50) {
							dot.xPos = canvas.width + 50;
						}
						if (dot.yPos < -50) {
							dot.yPos = canvas.height + 50;
						}
						if (dot.xPos > canvas.width + 50) {
							dot.xPos = -50;
						}
						if (dot.yPos > canvas.height + 50) {
							dot.yPos = -50;
						}
						//context.arc(dot.xPos, dot.yPos, (dot.radius / 2.5) * particleMouse, 0, 2 * Math.PI, false);
						context.beginPath();
						context.moveTo(dot.xPos, dot.yPos);
						context.lineTo(dot.xPos + (dot.radius * particleMouse), dot.yPos + (dot.radius * particleMouse));
						context.lineTo(dot.xPos, dot.yPos + ((dot.radius * particleMouse) * 2));
						context.lineTo(dot.xPos - (dot.radius * particleMouse), dot.yPos + (dot.radius * particleMouse));
						context.closePath();
						context.fill();
						if (mouseDown) {
							var minimumDistance = 164,
								distance = Math.sqrt((dot.xPos - mouse.x) * (dot.xPos - mouse.x) + (dot.yPos - mouse.y) * (dot.yPos - mouse.y)),
								distanceX = dot.xPos - mouse.x,
								distanceY = dot.yPos - mouse.y;
							if (distance < minimumDistance) {
								var forceFactor = minimumDistance / (distance * distance),
									xforce = (mouse.x - dot.xPos) % distance / 7,
									yforce = (mouse.y - dot.yPos) % distance / dot.friction,
									forceField = forceFactor * 2 / dot.friction;
								dot.vx -= forceField * xforce;
								dot.vy -= forceField * yforce;
							}
							if (dot.vx > dot.speed) {
								dot.vx = dot.speed / dot.friction;
								dot.vy = dot.speed / dot.friction;

							} else if (dot.vy > dot.speed) {
								dot.vy = dot.speed / dot.friction;


							}
						}

					}

				}

				function animate() {
					requestAnimationFrame(animate);
					dots.draw();

				}
				animate();
				init();
			}
		};
	}).directive("explosion", ["$interval",
		function($interval) {
			return {
				restrict: "C",
				template: "<canvas></canvas",
				replace: true,
				transclude: true,
				scope: {
					particle: "@",
					count: "=",
					speed: "=",
					size: "=",
					colors: "=",
					spawn: "="
				},
				link: function(scope, element, attrs) {
					console.log("Starting canvas ", scope.particle);
					var ctx = element[0].getContext('2d');
					var particles = [];
					var width, height;
					var maxCount = scope.count || 100;
					var maxSpeed = scope.speed || 150;
					var maxSize = scope.size || 10;
					var colors = scope.colors || ['#f00'];
					var spawnTime = scope.spawn ? 1000 / scope.spawn : 10;
					var resize = function() {
						element.attr({
							width: $('body').width(),
							height: $('body').height()
						});

						width = element.attr('width');
						height = element.attr('height');

						console.log("Size ", width, "x", height);
					};
					var spawn = function() {
						particles.push({
							x: width / 2,
							y: height / 2,
							v: {
								x: (maxSpeed << 1) * Math.random() - maxSpeed,
								y: (maxSpeed << 1) * Math.random() - maxSpeed
							},
							s: Math.random() * maxSize,
							a: 1,
							c: colors[Math.floor(Math.random() * colors.length)]
						});
					};
					var draw = function() {
						ctx.clearRect(0, 0, width, height);
						for (var i = 0; i < particles.length; i++) {
							var p = particles[i];
							ctx.globalAlpha = p.a;
							ctx.fillStyle = p.c;
							ctx.beginPath();
							ctx.arc(p.x, p.y, p.s, 0, 2 * Math.PI);
							ctx.fill();
						}
					};
					var lastSpawned = 0;
					var update = function(delta) {

						lastSpawned += delta;
						while (lastSpawned > spawnTime) {
							lastSpawned -= spawnTime;
							spawn();
						}
						var particleOverflow = particles.length - maxCount;
						if (particleOverflow > 0) {
							particles.splice(0, particleOverflow);
						}

						for (var i = 0; i < particles.length; i++) {
							var p = particles[i];
							p.x += p.v.x * delta / 1000;
							p.y += p.v.y * delta / 1000;
							p.a *= 0.99;
						}
					};
					var finished = false;
					var time;
					var animate = function(elapsed) {
						if (!time)
							time = elapsed;

						var delta = elapsed - time;
						time = elapsed;
						update(delta);
						draw();

						if (!finished) window.requestAnimationFrame(animate);
					};

					resize();
					$(window).on('resize', resize);
					window.requestAnimationFrame(animate);
					scope.$on("$destroy", function() {
						finished = true;
					});
				}
			};
		}
	]);