	 CREATE TABLE kmover.role (
   id SERIAL PRIMARY KEY ,
   title VARCHAR(75) NOT NULL,
   slug VARCHAR(100) NOT NULL,
   description TEXT NULL,
   active SMALLINT NOT NULL DEFAULT 0,
   createdAt TIMESTAMP(0) NOT NULL DEFAULT now(),
   updatedAt TIMESTAMP(0) NULL DEFAULT NULL,
   content TEXT NULL DEFAULT NULL,

   CONSTRAINT uq_slug_role UNIQUE  (slug)
 );