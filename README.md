# How to Upload Files to a Database in Blazor Using Syncfusion File Upload

## Overview

This sample demonstrates how to upload files from a Blazor application and persist the uploaded content in a database using the Syncfusion [Blazor File Upload](https://www.syncfusion.com/blazor-components/blazor-file-upload) component. The application connects the file upload workflow with a database layer, allowing uploaded files to be stored and managed through server-side processing. This approach is useful for applications that require centralized storage, auditing, backup strategies, or controlled access to uploaded documents and media.

The sample is built as a Blazor application with dedicated models, services, data access components, and Entity Framework migrations that support file persistence. It illustrates a complete end-to-end workflow from file selection in the browser to database storage on the server.

## Key Features

- Uses the Syncfusion Blazor File Upload(`SfUploader`) to upload files from the browser.
- Configures asynchronous file upload using `UploaderAsyncSettings` with:
  - `SaveUrl="api/SampleData/Save"`
  - `RemoveUrl="api/SampleData/Remove"`
- Handles the `OnUploadStart` event through `UploaderEvents` to process file data before upload.
- Converts uploaded file content from Base64 format to a byte array using `Convert.FromBase64String()` during the upload start event.
- Captures uploaded file metadata including the original file name through `args.FileData.Name`.
- Uses the `SampleDataController.Save()` API endpoint to receive uploaded files as `IList<IFormFile>`.
- Saves uploaded files to the application's `wwwroot` directory using `FileStream`.
- Prevents duplicate file creation by checking for existing files before saving.
- Returns custom response headers and upload status information from the upload API endpoint.
- Uses Entity Framework Core with SQL Server LocalDB (`ApplicationDb`) for data persistence.
- Stores uploaded file information in the `ImgClass` entity through the `ImgClasses` database table.
- Implements a dedicated `Imgservice` service layer to handle file record insertion and database operations.
- Uses `ApplicationDbContext` and `DbSet<ImgClass>` for database access and entity management.
- Persists uploaded file metadata including image identifiers and file names through the `ImgClass` model.
- Demonstrates dependency injection using `OwningComponentBase<Imgservice>` to access upload-related services within the Blazor component.

## Prerequisites

- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) or [Visual Studio Code](https://code.visualstudio.com/)
- [.NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet) compatible with the project's target framework

## How to Run the Project

**Visual Studio 2022**

1. Clone or download this repository.
2. Open `UploadingFiles.sln`.
3. Restore all NuGet packages.
4. Ensure `UploadingFiles` is selected as the startup project.
5. Configure the database connection if required for your environment.
6. Build the solution.
7. Run the application using `Ctrl+F5`.

**Visual Studio Code**

1. Clone or download this repository.
2. Open the repository folder in Visual Studio Code.
3. Open the integrated terminal.
4. Navigate to the project directory.

```bash
cd UploadingFiles
dotnet restore
dotnet run
```

5. Open the local application URL displayed in the terminal after the application starts.

## Project Structure

- `Pages/ImagesUpload.razor` - Main sample page that hosts the Syncfusion `SfUploader` component, configures upload endpoints, handles the `OnUploadStart` event, converts uploaded content to byte arrays, and stores file metadata through `Imgservice`.
- `Pages/Index.razor` - Default landing page for the Blazor application.

- `Data/ApplicationDbContext.cs` - Entity Framework Core database context that configures SQL Server connectivity and exposes `DbSet<ImgClass>` entities.
- `Data/ImgClass.cs` - Data model representing uploaded file information, including image identifier and file name.
- `Data/SampleDataController.cs` - Web API controller that processes file upload requests, saves files to the server, validates duplicate uploads, and returns upload responses.
- `Data/WeatherForecast.cs` - Default Blazor template data model included with the sample.
- `Data/WeatherForecastService.cs` - Default Blazor template service used to generate sample weather forecast data.

- `Models/ApplicationDbContext.cs` - Scaffolded Entity Framework Core database context generated from the SQL Server database schema.
- `Models/ImgClass.cs` - Scaffolded entity model representing records stored in the `ImgClass` database table.

- `Services/Imgservice.cs` - Service layer responsible for inserting uploaded file metadata into the database and committing changes through Entity Framework Core.

- `Migrations/*` - Entity Framework Core migration files used to create and maintain the database schema.

## Support and Feedback

- For general product questions, visit the [Syncfusion Community Forum](https://www.syncfusion.com/forums) or [Syncfusion Support](https://www.syncfusion.com/support).
- To report an issue specific to this sample, open a GitHub issue in this repository.
- Documentation: https://blazor.syncfusion.com/documentation/file-upload/getting-started

## License

This is a Syncfusion sample project provided to demonstrate product usage. Review the [Syncfusion license terms](https://www.syncfusion.com/sales/pricing?category=ui-components) before using Syncfusion components in your own applications.