'use client';

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

export function DataTable({ 
  columns, 
  data, 
  searchable = true, 
  onAdd, 
  onEdit, 
  onDelete,
  addButtonText = "Add New"
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const filteredData = data.filter(item =>
    searchable ? 
      Object.values(item).some(value => 
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      ) : true
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    
    if (sortDirection === "asc") {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {searchable && (
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              data-testid="input-search"
            />
          </div>
        )}
        {onAdd && (
          <Button onClick={onAdd} data-testid="button-add">
            <Plus className="mr-2 h-4 w-4" />
            {addButtonText}
          </Button>
        )}
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead 
                  key={column.key}
                  className={column.sortable ? "cursor-pointer hover:bg-muted/50" : ""}
                  onClick={() => column.sortable && handleSort(column.key)}
                  data-testid={`header-${column.key}`}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {column.sortable && sortColumn === column.key && (
                      <span className="text-xs">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </div>
                </TableHead>
              ))}
              {(onEdit || onDelete) && (
                <TableHead>Actions</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item, index) => (
              <TableRow key={index} data-testid={`row-${index}`}>
                {columns.map((column) => (
                  <TableCell key={column.key} data-testid={`cell-${column.key}-${index}`}>
                    {Array.isArray(item[column.key]) 
                      ? item[column.key].join(", ")
                      : String(item[column.key] || "")
                    }
                  </TableCell>
                ))}
                {(onEdit || onDelete) && (
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {onEdit && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onEdit(item)}
                          data-testid={`button-edit-${index}`}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                      {onDelete && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onDelete(item)}
                          data-testid={`button-delete-${index}`}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}