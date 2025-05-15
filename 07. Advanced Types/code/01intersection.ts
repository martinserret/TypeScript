// INTERSECTION TYPES
// --------------------------

// An intersection type is a type that combine others types. You can do it with "&".

type FileData = {
  path: string;
  content: string;
};

type Database = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = Database & Status;


// It's possible to do the same thing with "interface" and "extends"

interface FileDataInterface {
  path: string;
  content: string;
};

interface StatusInterface {
  isOpen: boolean;
  errorMessage?: string;
};

interface AccessedFileDataInterface extends FileDataInterface, StatusInterface {}