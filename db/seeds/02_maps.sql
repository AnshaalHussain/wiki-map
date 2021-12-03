-- INSERT INTO maps (title, description, favourite, user_id)
-- VALUES ('Best Coffee Places', 'description', TRUE, 3),
-- ('Parks for Family', 'description', TRUE, 3),
-- ('Parks for Dogs', 'description', FALSE, 3);

-- DROP TABLE IF EXISTS maps CASCADE;
​
-- CREATE TABLE maps (
--   id SERIAL PRIMARY KEY NOT NULL,
--   title VARCHAR(255) NOT NULL,
--   description VARCHAR(255) NOT NULL,
--   image_url VARCHAR,
--   favourite BOOLEAN DEFAULT FALSE,
--   center_latitude DOUBLE PRECISION,
--   center_longitude DOUBLE PRECISION,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
-- );
​
INSERT INTO maps (title, description, image_url, favourite, center_latitude, center_longitude, user_id) VALUES ('Best Coffee Shops', 'Places where you can get the most delicious coffee!', 'https://photos.smugmug.com/Canada/Ontario/Toronto-Coffee-Shops/i-MBS5gqb/0/180e6e4a/L/Toronto-Sorry-Coffee01-L.jpg', TRUE, 43.6815359, -79.5265765, 1), ('Best Tea Spots In Mississauga', 'Relax and taste the best herbs nature has to offer', 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f6c061ca71799093f55fd02%2FAromatic-herbal-tea-%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D5029%26cropY1%3D0%26cropY2%3D3354', TRUE, 43.6442812,-79.5705218, 1), ('Best Places to Fish in GTA', 'Catch some fish!', 'https://www.takemefishing.org/getmedia/300fa903-a2d3-4a30-a01c-3b994e4846ea/best-fishing-times-twitter.jpg?width=1200&height=675&ext=.jpg', FALSE, 43.7403512,-79.2859073, 2), ('When in Rome', 'Must see if you are in town!', 'https://media.tacdn.com/media/attractions-content--1x-1/0b/29/2c/cc.jpg', TRUE, 41.8997201,12.4189909, 3), ('Hiking Places in Ontario', 'Enjoy a scenice stroll!', 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528', TRUE, 43.7988777,-80.0820851, 1),('Best places to eat in the GTA', 'Places you gotta try if you are a foodie!', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shondaland-foodseries-foodie-1595984368.png?crop=1.00xw:0.502xh;0,0.240xh&resize=1200:*', TRUE, 43.7988777,-80.0820851, 1), ('Parks and Recreation', 'Places to enjoy a good picnic.', 'https://www.toronto.ca/data/parks/img/798/1.jpg', TRUE, 44.2979443,-80.0261627, 4), ('Places to see in Vancouver', 'Hidden gems in the city of Vancouver.', 'https://lp-cms-production.imgix.net/2021-10/Art%20Gallery%20from%20the%20Law%20Courts%20in%20Downtown%20Vancouver%20Canada%20Destination%20BC%20Tanya%20Goehring.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800', TRUE, 49.2808928,-123.1438848, 5);
