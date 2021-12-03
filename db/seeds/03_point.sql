-- INSERT INTO points (map_id, latitude, longitude, user_id, title, description, image)
-- VALUES (2, 13, 14, 3, 'Parks for Families', 'take your kids to the park', 'url'),
-- (1, 13, 14, 3, 'Parks for Dogs', 'amazing for walkies', 'url');

-- DROP TABLE IF EXISTS points CASCADE;
​
-- CREATE TABLE points (
--   id SERIAL PRIMARY KEY NOT NULL,
--   map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE,
--   latitude DOUBLE PRECISION DEFAULT 0,
--   longitude DOUBLE PRECISION DEFAULT 0,
​
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   title VARCHAR(255) NOT NULL,
--   description VARCHAR(255) NOT NULL,
--   image VARCHAR(255) NOT NULL
-- );
​
INSERT INTO points (map_id, user_id, latitude, longitude, title, description, image)
VALUES(1, 1, 43.6595045,-79.4955679, 'Early Bird', 'Organic, Fair Trade coffee.', 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg'),
(1, 2, 43.6595045,-79.4955679, 'Coffee By the lake', 'No place better.', 'https://cdn.shopify.com/s/files/1/0135/1827/4660/articles/coffee-shop-lighting_775x.jpg?v=1579712471'),
(1, 3, 43.6530152,-79.4466873, 'Sympatico Cafe', 'Small, Family Owned Business', 'https://blog-assets.lightspeedhq.com/img/2021/03/b26bcdcf-blog_coffee-shop-equipment-list_1200x628.jpg'),
(1, 1, 43.7203878,-79.4688534, 'Starbucks', 'Coffee chain', 'https://media-cdn.tripadvisor.com/media/photo-s/0c/01/5e/aa/20160716-113732-largejpg.jpg'),
(1, 2, 43.6992291,-79.4820542, 'Roasted Paradise', 'The Finest Arabica coffee', 'https://inspirationdesignbooks.com/blog/wp-content/uploads/2018/10/World%E2%80%99s-best-coffee-shops-for-Design-Lovers-1.jpg'),
​
(3, 3, 43.7188114,-79.5791512, 'Walleye Spot', 'Catch walleye here in the summer', 'https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg'),
(3, 3, 43.7188114,-79.5791512, 'Pond', 'Secluded pond with lots of fish', 'https://cdn.pixabay.com/photo/2018/04/13/13/04/fish-3316503_960_720.jpg'),
(3, 3, 43.4946207,-79.9691378, 'Carp Spot', 'Easy to catch carp here', 'https://www.takemefishing.org/getmedia/160b8909-4145-48f7-8b38-de1564789b2a/Good-Local-Fishing-Spot-640x280.jpg?width=640&height=280&ext=.jpg'),
(3, 3, 43.0940997,-79.7366895, 'Guelph Fishing', 'Have been going here for years', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIAk2BRbaoQq5jtOqhcgcGYFnSTWhmZGeiA&usqp=CAU'),
(3, 1, 44.133962,-78.9642604, 'Lake Scugog', 'Catch your fill of bass', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztqlcZPDDCbCz96Teny92ltUwMjZ7iWbxnQ&usqp=CAU'),
(3, 4, 43.9224286,-78.7811892, 'Rice Lake', 'Fishing for catfish? Here is the best spot for it', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fLz2ozGl7QwPqN22mjqobSYuErAF5E3JkQ&usqp=CAU'),
(3, 5, 43.9224286,-78.7811892, 'Lake Simcoe', 'Lots of common fish here', 'https://images.thestar.com/idCYNzcVgiRJou25H9xmUHjMRaM=/968x613/smart/filters:cb(2700061000)/https://www.therecord.com/content/dam/therecord/news/waterloo-region/2015/06/05/plenty-of-fishing-spots-in-waterloo-region/B821982295Z.1_20150605203010_000_GVI1GAFSR.2_Gallery.jpg'),
(3, 3, 43.7896323,-79.1951518, 'Rouge River', 'Good for beginners', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmNMBGKm2o7tCHV4ozhTMGZPZ44thGLC9ng&usqp=CAU'),
(3, 2, 43.7689076,-79.7986158, 'Heart Lake', 'Good for beginners', 'https://www.todocanada.ca/wp-content/uploads/fishing-with-kids1-1280x720.jpeg'),
(3, 1, 43.7444825,-79.1883718, 'Lakeshore fishing spot', 'Been going here for years, always catch fish here', 'https://trcaca.s3.ca-central-1.amazonaws.com/app/uploads/2015/12/17185222/TRCA_FISHING_RESIZED_750.jpg'),
(3, 1, 43.6353121,-79.4938004, 'Humber River', 'Oldie, but still works like a charm', 'https://www.takemefishing.org/getmedia/eff46b50-bda9-4649-ba97-ff32791c06b2/Best-places-to-fish-world640x280.jpg?width=640&height=280&ext=.jpg'),
(3, 4, 43.6040437,-79.5461228, 'Centennial Park', 'Small pond with a little fish here', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefQkGFYQZA2NP6z08sikA2l0Kk9wwP-QI3Q&usqp=CAU'),
(3, 4, 43.3838166,-79.7444838, 'Hamilton Beach', 'Some good places by the shore along the beach', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-GyIOsVpjmi0DWfupf0EB_MM-xlCpLPZJA&usqp=CAU'),
(3, 5, 43.8644284,-79.1671477, 'Pickering fishing', 'Unknown to many so lots of fish here!', 'https://tourismnewbrunswick.ca/sites/default/files/styles/square/public/images/wiki/absolute-017-medium.jpg');
