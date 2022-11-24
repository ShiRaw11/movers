 CREATE TABLE IF NOT EXISTS kmover.role_permission (
   roleId INT NOT NULL,
   permissionId INT NOT NULL,
   createdAt TIMESTAMP(0) NOT NULL DEFAULT now(),
   updatedAt TIMESTAMP(0) NULL,
       CONSTRAINT pk_role_permission PRIMARY KEY (roleId, permissionId),
   CONSTRAINT fk_role_permission_role
     FOREIGN KEY (roleId)
     REFERENCES kmover.role (id)
     ON DELETE NO ACTION
     ON UPDATE NO ACTION,
   CONSTRAINT fk_role_permission_permission
     FOREIGN KEY (permissionId)
     REFERENCES kmover.permission (id)
     ON DELETE NO ACTION
     ON UPDATE NO ACTION
 );

 CREATE INDEX idx_role_permission_role ON kmover.role_permission (roleId ASC);
 CREATE INDEX idx_role_permission_permission ON kmover.role_permission (permissionId ASC);