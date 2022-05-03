using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class mayUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsSubscribed",
                table: "Employees");

            migrationBuilder.AddColumn<Guid>(
                name: "ResourceId",
                table: "Jobs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_ResourceId",
                table: "Jobs",
                column: "ResourceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Resources_ResourceId",
                table: "Jobs",
                column: "ResourceId",
                principalTable: "Resources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_Resources_ResourceId",
                table: "Jobs");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_ResourceId",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "ResourceId",
                table: "Jobs");

            migrationBuilder.AddColumn<bool>(
                name: "IsSubscribed",
                table: "Employees",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }
    }
}
