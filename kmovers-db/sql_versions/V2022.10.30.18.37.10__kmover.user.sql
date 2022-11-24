 CREATE TABLE kmover.user (
   userId SERIAL PRIMARY KEY ,
  roleId INT NOT NULL,
   firstName VARCHAR(50) NOT NULL,
   lastName VARCHAR(255) NOT NULL,
   phoneNumber VARCHAR(15) NOT NULL,
   email VARCHAR(50) NOT NULL,
   passwordHash VARCHAR(255) NOT NULL,
   phoneVerificationCode VARCHAR(255) NOT NULL,
   emailVerificationCode VARCHAR(255) NOT NULL,
   passwordResetToken VARCHAR(255) NOT NULL,
   createdAt TIMESTAMP(0) NOT NULL DEFAULT now(),
   updatedAt TIMESTAMP(0) NOT NULL,DEFAULT now();
   lastLogin TIMESTAMP(0) NULL DEFAULT NULL,

   CONSTRAINT uq_mobile UNIQUE  (phoneNumber),
   CONSTRAINT uq_email UNIQUE  (email),
  CONSTRAINT fk_user_role
     FOREIGN KEY (roleId)
     REFERENCES kmover.role (id)
     ON DELETE NO ACTION
     ON UPDATE NO ACTION
  
 );
  CREATE INDEX idx_user_role ON kmover.user (roleId ASC);

 CREATE TABLE kmover.management (
     id SERIAL PRIMARY KEY ,
     contactName VARCHAR(50) NOT NULL,
      contactAddress VARCHAR(255) NOT NULL,
       contactEmail VARCHAR(50) NOT NULL,
   contactPhoneNumber VARCHAR(15) NOT NULL,
  
 );