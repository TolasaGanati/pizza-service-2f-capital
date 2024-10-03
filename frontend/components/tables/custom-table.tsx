"use client";
import { useState } from "react";
import {
  MaterialReactTable,
  MRT_RowData,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
} from "material-react-table";
import { Typography } from "@mui/material";
import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type GenericApiResponse<T> = {
  data: T[];
};

type GenericTableProps<T extends MRT_RowData> = {
  fetchUrl?: string; // Optional for hardcoded data
  columns: MRT_ColumnDef<T>[];
  queryKey: string;
  maxHeight: string;
  title: string;
  data?: T[]; // Accept hardcoded data as a prop
};

const GenericTable = <T extends MRT_RowData>({
  fetchUrl,
  columns,
  queryKey,
  maxHeight,
  title,
  data: hardcodedData, // Use hardcoded data if provided
}: GenericTableProps<T>) => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // If no fetchUrl is provided, use the hardcoded data
  const { data, isError, isRefetching, isLoading, refetch } = useQuery<GenericApiResponse<T>>({
    queryKey: [queryKey, columnFilters, globalFilter],
    queryFn: async () => {
      if (fetchUrl) {
        const fetchURL = new URL(fetchUrl, process.env.NEXT_PUBLIC_BASE_URL);

        // Convert the columnFilters to the expected query string format
        if (columnFilters.length > 0) {
          const filters = columnFilters.map((filter: any) => ({
            id: filter.id,
            opervalue: "contains",
            val: filter.value,
          }));
          const filterString = JSON.stringify(filters);
          fetchURL.searchParams.append("filter", filterString);
        }

        // Add global filter
        if (globalFilter) {
          fetchURL.searchParams.append("search", globalFilter);
        }

        const response = await axios.get<GenericApiResponse<T>>(fetchURL.href, {
          withCredentials: true,
        });
        return response.data;
      } else {
        // Return hardcoded data if fetchUrl is not provided
        return { data: hardcodedData ?? [] };
      }
    },
    placeholderData: keepPreviousData,
  });

  const table = useMaterialReactTable({
    enableColumnActions: false,
    enableSorting: false,
    enablePagination: false,
    enableTableFooter: false,
    enableStickyFooter: false,
    enableBottomToolbar: false,
    columns,
    data: data?.data ?? [],
    state: {
      columnFilters,
      globalFilter,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
      showSkeletons: isLoading,
    },
    manualFiltering: true,
    enableColumnFilterModes: true,
    initialState: { showColumnFilters: false },
    renderTopToolbarCustomActions: () => (
      <Typography variant="h6" sx={{ fontWeight: 600, ml: 3, fontSize: 16 }}>
        {title}
      </Typography>
    ),
    muiTableContainerProps: { sx: { maxHeight, p: 2 } },
    muiTableHeadCellProps: { sx: { fontWeight: "normal" } },
    muiToolbarAlertBannerProps: isError
      ? { color: "error", children: "Error loading data" }
      : undefined,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
  });

  return <MaterialReactTable table={table} />;
};

export default GenericTable;
