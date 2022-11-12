insert into users (first_name, last_name, created_at, updated_at)
values ('Jane','Amsden', now(), now()),('Emily','Dixon', now(), now()),('Theodore', 'Dostoevsky', now(), now()),('William', 'Shapiro', now(), now()),('Lao','Xiu', now(), now());
select * from users;
insert into books (title, created_at, updated_at)
values ('C sharp', now(), now()),('Java', now(), now()),('Python', now(), now()),('PHP', now(), now()),('Ruby', now(), now());
update books 
set title = 'C#' where id=1;
select * from books;
update users
set first_name = 'Bill' where id=4;
select * from users;
insert into favorites (user_id, book_id)
values (1,1),(1,2);
select * from favorites;
insert into favorites (user_id, book_id)
values (2, 1),(2,2),(2,3),(3,1),(3,2),(3,3),(3,4),(4,1),(4,2),(4,3),(4,4),(4,5);
select user_id, book_id, users.first_name, users.last_name from favorites
join users on favorites.user_id = users.id
where book_id = 3;
delete from favorites where user_id = 2 and book_id = 3;
select * from users;
insert into favorites (user_id, book_id)
values (5,2);
select * from favorites;
select user_id, book_id, books.title from favorites 
join books on book_id = books.id
where user_id = 3;
select first_name, user_id from users
join favorites on favorites.user_id = users.id
where favorites.user_id = 5