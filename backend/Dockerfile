FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env

WORKDIR /app

# Copy csproj and restore as distinct layers
COPY Module6HW1.sln ./
COPY Module6HW1/*.csproj ./Module6HW1/

RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish Module6HW1.sln -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0

ENV ASPNETCORE_URLS=http://*:8080
ENV ASPNETCORE_ENVIRONMENT=Development

USER 1000

WORKDIR /app
COPY --from=build-env /app/out .

EXPOSE 8080
EXPOSE 1433
ENTRYPOINT ["dotnet", "Module6HW1.dll"]