import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { Address, AdminDashboard, Article, AuthTokens, Beat, BeatAssignment, CreateAddressRequest, CreateArticleRequest, CreateBeatRequest, CreateOfficeRequest, CreateUserRequest, CreateVisitRequest, DailyReport, ErrorResponse, GetAdminDashboardParams, GetDailyReportParams, GetOperatorProductivityReportParams, GetSummaryReportParams, HealthStatus, ListAddressesParams, ListArticlesParams, ListBeatsParams, ListOfficesParams, ListOperatorLocationsParams, ListUsersParams, ListVisitsParams, LoginRequest, Office, OfficeAssignment, OperatorDashboard, OperatorLocation, OperatorProductivity, StatusUpdate, SuccessResponse, SummaryReport, TokenRefreshInput, UpdateAddressRequest, UpdateArticleRequest, UpdateBeatRequest, UpdateLocationRequest, UpdateOfficeRequest, UpdateUserRequest, UpdateVisitRequest, User, Visit } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getLoginUrl: () => string;
/**
 * @summary Login for all user roles
 */
export declare const login: (loginRequest: LoginRequest, options?: RequestInit) => Promise<AuthTokens>;
export declare const getLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<LoginRequest>;
export type LoginMutationError = ErrorType<ErrorResponse>;
/**
* @summary Login for all user roles
*/
export declare const useLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
export declare const getRefreshTokenUrl: () => string;
/**
 * @summary Refresh access token
 */
export declare const refreshToken: (tokenRefreshInput: TokenRefreshInput, options?: RequestInit) => Promise<AuthTokens>;
export declare const getRefreshTokenMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof refreshToken>>, TError, {
        data: BodyType<TokenRefreshInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof refreshToken>>, TError, {
    data: BodyType<TokenRefreshInput>;
}, TContext>;
export type RefreshTokenMutationResult = NonNullable<Awaited<ReturnType<typeof refreshToken>>>;
export type RefreshTokenMutationBody = BodyType<TokenRefreshInput>;
export type RefreshTokenMutationError = ErrorType<unknown>;
/**
* @summary Refresh access token
*/
export declare const useRefreshToken: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof refreshToken>>, TError, {
        data: BodyType<TokenRefreshInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof refreshToken>>, TError, {
    data: BodyType<TokenRefreshInput>;
}, TContext>;
export declare const getLogoutUrl: () => string;
/**
 * @summary Logout and invalidate tokens
 */
export declare const logout: (options?: RequestInit) => Promise<SuccessResponse>;
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
* @summary Logout and invalidate tokens
*/
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export declare const getGetMeUrl: () => string;
/**
 * @summary Get current authenticated user profile
 */
export declare const getMe: (options?: RequestInit) => Promise<User>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<unknown>;
/**
 * @summary Get current authenticated user profile
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListOfficesUrl: (params?: ListOfficesParams) => string;
/**
 * @summary List all post offices
 */
export declare const listOffices: (params?: ListOfficesParams, options?: RequestInit) => Promise<Office[]>;
export declare const getListOfficesQueryKey: (params?: ListOfficesParams) => readonly ["/api/offices", ...ListOfficesParams[]];
export declare const getListOfficesQueryOptions: <TData = Awaited<ReturnType<typeof listOffices>>, TError = ErrorType<unknown>>(params?: ListOfficesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listOffices>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listOffices>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListOfficesQueryResult = NonNullable<Awaited<ReturnType<typeof listOffices>>>;
export type ListOfficesQueryError = ErrorType<unknown>;
/**
 * @summary List all post offices
 */
export declare function useListOffices<TData = Awaited<ReturnType<typeof listOffices>>, TError = ErrorType<unknown>>(params?: ListOfficesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listOffices>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateOfficeUrl: () => string;
/**
 * @summary Create a new post office (super admin)
 */
export declare const createOffice: (createOfficeRequest: CreateOfficeRequest, options?: RequestInit) => Promise<Office>;
export declare const getCreateOfficeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createOffice>>, TError, {
        data: BodyType<CreateOfficeRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createOffice>>, TError, {
    data: BodyType<CreateOfficeRequest>;
}, TContext>;
export type CreateOfficeMutationResult = NonNullable<Awaited<ReturnType<typeof createOffice>>>;
export type CreateOfficeMutationBody = BodyType<CreateOfficeRequest>;
export type CreateOfficeMutationError = ErrorType<unknown>;
/**
* @summary Create a new post office (super admin)
*/
export declare const useCreateOffice: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createOffice>>, TError, {
        data: BodyType<CreateOfficeRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createOffice>>, TError, {
    data: BodyType<CreateOfficeRequest>;
}, TContext>;
export declare const getGetOfficeUrl: (id: string) => string;
/**
 * @summary Get a specific office
 */
export declare const getOffice: (id: string, options?: RequestInit) => Promise<Office>;
export declare const getGetOfficeQueryKey: (id: string) => readonly [`/api/offices/${string}`];
export declare const getGetOfficeQueryOptions: <TData = Awaited<ReturnType<typeof getOffice>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOffice>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getOffice>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetOfficeQueryResult = NonNullable<Awaited<ReturnType<typeof getOffice>>>;
export type GetOfficeQueryError = ErrorType<unknown>;
/**
 * @summary Get a specific office
 */
export declare function useGetOffice<TData = Awaited<ReturnType<typeof getOffice>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOffice>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateOfficeUrl: (id: string) => string;
/**
 * @summary Update office details or polygon
 */
export declare const updateOffice: (id: string, updateOfficeRequest: UpdateOfficeRequest, options?: RequestInit) => Promise<Office>;
export declare const getUpdateOfficeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateOffice>>, TError, {
        id: string;
        data: BodyType<UpdateOfficeRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateOffice>>, TError, {
    id: string;
    data: BodyType<UpdateOfficeRequest>;
}, TContext>;
export type UpdateOfficeMutationResult = NonNullable<Awaited<ReturnType<typeof updateOffice>>>;
export type UpdateOfficeMutationBody = BodyType<UpdateOfficeRequest>;
export type UpdateOfficeMutationError = ErrorType<unknown>;
/**
* @summary Update office details or polygon
*/
export declare const useUpdateOffice: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateOffice>>, TError, {
        id: string;
        data: BodyType<UpdateOfficeRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateOffice>>, TError, {
    id: string;
    data: BodyType<UpdateOfficeRequest>;
}, TContext>;
export declare const getSetOfficeStatusUrl: (id: string) => string;
/**
 * @summary Activate or deactivate an office
 */
export declare const setOfficeStatus: (id: string, statusUpdate: StatusUpdate, options?: RequestInit) => Promise<Office>;
export declare const getSetOfficeStatusMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setOfficeStatus>>, TError, {
        id: string;
        data: BodyType<StatusUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setOfficeStatus>>, TError, {
    id: string;
    data: BodyType<StatusUpdate>;
}, TContext>;
export type SetOfficeStatusMutationResult = NonNullable<Awaited<ReturnType<typeof setOfficeStatus>>>;
export type SetOfficeStatusMutationBody = BodyType<StatusUpdate>;
export type SetOfficeStatusMutationError = ErrorType<unknown>;
/**
* @summary Activate or deactivate an office
*/
export declare const useSetOfficeStatus: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setOfficeStatus>>, TError, {
        id: string;
        data: BodyType<StatusUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setOfficeStatus>>, TError, {
    id: string;
    data: BodyType<StatusUpdate>;
}, TContext>;
export declare const getListUsersUrl: (params?: ListUsersParams) => string;
/**
 * @summary List users (filtered by role if provided)
 */
export declare const listUsers: (params?: ListUsersParams, options?: RequestInit) => Promise<User[]>;
export declare const getListUsersQueryKey: (params?: ListUsersParams) => readonly ["/api/users", ...ListUsersParams[]];
export declare const getListUsersQueryOptions: <TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<unknown>>(params?: ListUsersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListUsersQueryResult = NonNullable<Awaited<ReturnType<typeof listUsers>>>;
export type ListUsersQueryError = ErrorType<unknown>;
/**
 * @summary List users (filtered by role if provided)
 */
export declare function useListUsers<TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<unknown>>(params?: ListUsersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateUserUrl: () => string;
/**
 * @summary Create a new user (admin or operator)
 */
export declare const createUser: (createUserRequest: CreateUserRequest, options?: RequestInit) => Promise<User>;
export declare const getCreateUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError, {
        data: BodyType<CreateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError, {
    data: BodyType<CreateUserRequest>;
}, TContext>;
export type CreateUserMutationResult = NonNullable<Awaited<ReturnType<typeof createUser>>>;
export type CreateUserMutationBody = BodyType<CreateUserRequest>;
export type CreateUserMutationError = ErrorType<unknown>;
/**
* @summary Create a new user (admin or operator)
*/
export declare const useCreateUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError, {
        data: BodyType<CreateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createUser>>, TError, {
    data: BodyType<CreateUserRequest>;
}, TContext>;
export declare const getGetUserUrl: (id: string) => string;
/**
 * @summary Get user details
 */
export declare const getUser: (id: string, options?: RequestInit) => Promise<User>;
export declare const getGetUserQueryKey: (id: string) => readonly [`/api/users/${string}`];
export declare const getGetUserQueryOptions: <TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>;
export type GetUserQueryError = ErrorType<unknown>;
/**
 * @summary Get user details
 */
export declare function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateUserUrl: (id: string) => string;
/**
 * @summary Update user details
 */
export declare const updateUser: (id: string, updateUserRequest: UpdateUserRequest, options?: RequestInit) => Promise<User>;
export declare const getUpdateUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
        id: string;
        data: BodyType<UpdateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
    id: string;
    data: BodyType<UpdateUserRequest>;
}, TContext>;
export type UpdateUserMutationResult = NonNullable<Awaited<ReturnType<typeof updateUser>>>;
export type UpdateUserMutationBody = BodyType<UpdateUserRequest>;
export type UpdateUserMutationError = ErrorType<unknown>;
/**
* @summary Update user details
*/
export declare const useUpdateUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
        id: string;
        data: BodyType<UpdateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateUser>>, TError, {
    id: string;
    data: BodyType<UpdateUserRequest>;
}, TContext>;
export declare const getAssignOfficesToUserUrl: (id: string) => string;
/**
 * @summary Assign offices to an admin user
 */
export declare const assignOfficesToUser: (id: string, officeAssignment: OfficeAssignment, options?: RequestInit) => Promise<User>;
export declare const getAssignOfficesToUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignOfficesToUser>>, TError, {
        id: string;
        data: BodyType<OfficeAssignment>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof assignOfficesToUser>>, TError, {
    id: string;
    data: BodyType<OfficeAssignment>;
}, TContext>;
export type AssignOfficesToUserMutationResult = NonNullable<Awaited<ReturnType<typeof assignOfficesToUser>>>;
export type AssignOfficesToUserMutationBody = BodyType<OfficeAssignment>;
export type AssignOfficesToUserMutationError = ErrorType<unknown>;
/**
* @summary Assign offices to an admin user
*/
export declare const useAssignOfficesToUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignOfficesToUser>>, TError, {
        id: string;
        data: BodyType<OfficeAssignment>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof assignOfficesToUser>>, TError, {
    id: string;
    data: BodyType<OfficeAssignment>;
}, TContext>;
export declare const getSetUserStatusUrl: (id: string) => string;
/**
 * @summary Activate or deactivate a user
 */
export declare const setUserStatus: (id: string, statusUpdate: StatusUpdate, options?: RequestInit) => Promise<User>;
export declare const getSetUserStatusMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setUserStatus>>, TError, {
        id: string;
        data: BodyType<StatusUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setUserStatus>>, TError, {
    id: string;
    data: BodyType<StatusUpdate>;
}, TContext>;
export type SetUserStatusMutationResult = NonNullable<Awaited<ReturnType<typeof setUserStatus>>>;
export type SetUserStatusMutationBody = BodyType<StatusUpdate>;
export type SetUserStatusMutationError = ErrorType<unknown>;
/**
* @summary Activate or deactivate a user
*/
export declare const useSetUserStatus: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setUserStatus>>, TError, {
        id: string;
        data: BodyType<StatusUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setUserStatus>>, TError, {
    id: string;
    data: BodyType<StatusUpdate>;
}, TContext>;
export declare const getListBeatsUrl: (params?: ListBeatsParams) => string;
/**
 * @summary List beats for an office
 */
export declare const listBeats: (params?: ListBeatsParams, options?: RequestInit) => Promise<Beat[]>;
export declare const getListBeatsQueryKey: (params?: ListBeatsParams) => readonly ["/api/beats", ...ListBeatsParams[]];
export declare const getListBeatsQueryOptions: <TData = Awaited<ReturnType<typeof listBeats>>, TError = ErrorType<unknown>>(params?: ListBeatsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBeats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listBeats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListBeatsQueryResult = NonNullable<Awaited<ReturnType<typeof listBeats>>>;
export type ListBeatsQueryError = ErrorType<unknown>;
/**
 * @summary List beats for an office
 */
export declare function useListBeats<TData = Awaited<ReturnType<typeof listBeats>>, TError = ErrorType<unknown>>(params?: ListBeatsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBeats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateBeatUrl: () => string;
/**
 * @summary Create a new beat with polygon
 */
export declare const createBeat: (createBeatRequest: CreateBeatRequest, options?: RequestInit) => Promise<Beat>;
export declare const getCreateBeatMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBeat>>, TError, {
        data: BodyType<CreateBeatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createBeat>>, TError, {
    data: BodyType<CreateBeatRequest>;
}, TContext>;
export type CreateBeatMutationResult = NonNullable<Awaited<ReturnType<typeof createBeat>>>;
export type CreateBeatMutationBody = BodyType<CreateBeatRequest>;
export type CreateBeatMutationError = ErrorType<unknown>;
/**
* @summary Create a new beat with polygon
*/
export declare const useCreateBeat: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBeat>>, TError, {
        data: BodyType<CreateBeatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createBeat>>, TError, {
    data: BodyType<CreateBeatRequest>;
}, TContext>;
export declare const getGetBeatUrl: (id: string) => string;
/**
 * @summary Get beat details with polygon and addresses
 */
export declare const getBeat: (id: string, options?: RequestInit) => Promise<Beat>;
export declare const getGetBeatQueryKey: (id: string) => readonly [`/api/beats/${string}`];
export declare const getGetBeatQueryOptions: <TData = Awaited<ReturnType<typeof getBeat>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBeat>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBeat>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBeatQueryResult = NonNullable<Awaited<ReturnType<typeof getBeat>>>;
export type GetBeatQueryError = ErrorType<unknown>;
/**
 * @summary Get beat details with polygon and addresses
 */
export declare function useGetBeat<TData = Awaited<ReturnType<typeof getBeat>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBeat>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateBeatUrl: (id: string) => string;
/**
 * @summary Update beat details or polygon
 */
export declare const updateBeat: (id: string, updateBeatRequest: UpdateBeatRequest, options?: RequestInit) => Promise<Beat>;
export declare const getUpdateBeatMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateBeat>>, TError, {
        id: string;
        data: BodyType<UpdateBeatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateBeat>>, TError, {
    id: string;
    data: BodyType<UpdateBeatRequest>;
}, TContext>;
export type UpdateBeatMutationResult = NonNullable<Awaited<ReturnType<typeof updateBeat>>>;
export type UpdateBeatMutationBody = BodyType<UpdateBeatRequest>;
export type UpdateBeatMutationError = ErrorType<unknown>;
/**
* @summary Update beat details or polygon
*/
export declare const useUpdateBeat: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateBeat>>, TError, {
        id: string;
        data: BodyType<UpdateBeatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateBeat>>, TError, {
    id: string;
    data: BodyType<UpdateBeatRequest>;
}, TContext>;
export declare const getAssignBeatUrl: (id: string) => string;
/**
 * @summary Assign a beat to a field operator
 */
export declare const assignBeat: (id: string, beatAssignment: BeatAssignment, options?: RequestInit) => Promise<Beat>;
export declare const getAssignBeatMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignBeat>>, TError, {
        id: string;
        data: BodyType<BeatAssignment>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof assignBeat>>, TError, {
    id: string;
    data: BodyType<BeatAssignment>;
}, TContext>;
export type AssignBeatMutationResult = NonNullable<Awaited<ReturnType<typeof assignBeat>>>;
export type AssignBeatMutationBody = BodyType<BeatAssignment>;
export type AssignBeatMutationError = ErrorType<unknown>;
/**
* @summary Assign a beat to a field operator
*/
export declare const useAssignBeat: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignBeat>>, TError, {
        id: string;
        data: BodyType<BeatAssignment>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof assignBeat>>, TError, {
    id: string;
    data: BodyType<BeatAssignment>;
}, TContext>;
export declare const getListArticlesUrl: (params?: ListArticlesParams) => string;
/**
 * @summary List postal articles
 */
export declare const listArticles: (params?: ListArticlesParams, options?: RequestInit) => Promise<Article[]>;
export declare const getListArticlesQueryKey: (params?: ListArticlesParams) => readonly ["/api/articles", ...ListArticlesParams[]];
export declare const getListArticlesQueryOptions: <TData = Awaited<ReturnType<typeof listArticles>>, TError = ErrorType<unknown>>(params?: ListArticlesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listArticles>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listArticles>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListArticlesQueryResult = NonNullable<Awaited<ReturnType<typeof listArticles>>>;
export type ListArticlesQueryError = ErrorType<unknown>;
/**
 * @summary List postal articles
 */
export declare function useListArticles<TData = Awaited<ReturnType<typeof listArticles>>, TError = ErrorType<unknown>>(params?: ListArticlesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listArticles>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateArticleUrl: () => string;
/**
 * @summary Issue a postal article to an operator
 */
export declare const createArticle: (createArticleRequest: CreateArticleRequest, options?: RequestInit) => Promise<Article>;
export declare const getCreateArticleMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createArticle>>, TError, {
        data: BodyType<CreateArticleRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createArticle>>, TError, {
    data: BodyType<CreateArticleRequest>;
}, TContext>;
export type CreateArticleMutationResult = NonNullable<Awaited<ReturnType<typeof createArticle>>>;
export type CreateArticleMutationBody = BodyType<CreateArticleRequest>;
export type CreateArticleMutationError = ErrorType<unknown>;
/**
* @summary Issue a postal article to an operator
*/
export declare const useCreateArticle: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createArticle>>, TError, {
        data: BodyType<CreateArticleRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createArticle>>, TError, {
    data: BodyType<CreateArticleRequest>;
}, TContext>;
export declare const getGetArticleUrl: (id: string) => string;
/**
 * @summary Get article by ID
 */
export declare const getArticle: (id: string, options?: RequestInit) => Promise<Article>;
export declare const getGetArticleQueryKey: (id: string) => readonly [`/api/articles/${string}`];
export declare const getGetArticleQueryOptions: <TData = Awaited<ReturnType<typeof getArticle>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getArticle>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getArticle>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetArticleQueryResult = NonNullable<Awaited<ReturnType<typeof getArticle>>>;
export type GetArticleQueryError = ErrorType<unknown>;
/**
 * @summary Get article by ID
 */
export declare function useGetArticle<TData = Awaited<ReturnType<typeof getArticle>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getArticle>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateArticleUrl: (id: string) => string;
/**
 * @summary Update article delivery status
 */
export declare const updateArticle: (id: string, updateArticleRequest: UpdateArticleRequest, options?: RequestInit) => Promise<Article>;
export declare const getUpdateArticleMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateArticle>>, TError, {
        id: string;
        data: BodyType<UpdateArticleRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateArticle>>, TError, {
    id: string;
    data: BodyType<UpdateArticleRequest>;
}, TContext>;
export type UpdateArticleMutationResult = NonNullable<Awaited<ReturnType<typeof updateArticle>>>;
export type UpdateArticleMutationBody = BodyType<UpdateArticleRequest>;
export type UpdateArticleMutationError = ErrorType<unknown>;
/**
* @summary Update article delivery status
*/
export declare const useUpdateArticle: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateArticle>>, TError, {
        id: string;
        data: BodyType<UpdateArticleRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateArticle>>, TError, {
    id: string;
    data: BodyType<UpdateArticleRequest>;
}, TContext>;
export declare const getScanArticleUrl: (barcode: string) => string;
/**
 * @summary Look up article by barcode
 */
export declare const scanArticle: (barcode: string, options?: RequestInit) => Promise<Article>;
export declare const getScanArticleQueryKey: (barcode: string) => readonly [`/api/articles/scan/${string}`];
export declare const getScanArticleQueryOptions: <TData = Awaited<ReturnType<typeof scanArticle>>, TError = ErrorType<ErrorResponse>>(barcode: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof scanArticle>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof scanArticle>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ScanArticleQueryResult = NonNullable<Awaited<ReturnType<typeof scanArticle>>>;
export type ScanArticleQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Look up article by barcode
 */
export declare function useScanArticle<TData = Awaited<ReturnType<typeof scanArticle>>, TError = ErrorType<ErrorResponse>>(barcode: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof scanArticle>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListVisitsUrl: (params?: ListVisitsParams) => string;
/**
 * @summary List field visits
 */
export declare const listVisits: (params?: ListVisitsParams, options?: RequestInit) => Promise<Visit[]>;
export declare const getListVisitsQueryKey: (params?: ListVisitsParams) => readonly ["/api/visits", ...ListVisitsParams[]];
export declare const getListVisitsQueryOptions: <TData = Awaited<ReturnType<typeof listVisits>>, TError = ErrorType<unknown>>(params?: ListVisitsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listVisits>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listVisits>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListVisitsQueryResult = NonNullable<Awaited<ReturnType<typeof listVisits>>>;
export type ListVisitsQueryError = ErrorType<unknown>;
/**
 * @summary List field visits
 */
export declare function useListVisits<TData = Awaited<ReturnType<typeof listVisits>>, TError = ErrorType<unknown>>(params?: ListVisitsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listVisits>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateVisitUrl: () => string;
/**
 * @summary Create a field visit record
 */
export declare const createVisit: (createVisitRequest: CreateVisitRequest, options?: RequestInit) => Promise<Visit>;
export declare const getCreateVisitMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createVisit>>, TError, {
        data: BodyType<CreateVisitRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createVisit>>, TError, {
    data: BodyType<CreateVisitRequest>;
}, TContext>;
export type CreateVisitMutationResult = NonNullable<Awaited<ReturnType<typeof createVisit>>>;
export type CreateVisitMutationBody = BodyType<CreateVisitRequest>;
export type CreateVisitMutationError = ErrorType<unknown>;
/**
* @summary Create a field visit record
*/
export declare const useCreateVisit: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createVisit>>, TError, {
        data: BodyType<CreateVisitRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createVisit>>, TError, {
    data: BodyType<CreateVisitRequest>;
}, TContext>;
export declare const getUpdateVisitUrl: (id: string) => string;
/**
 * @summary Update a visit record
 */
export declare const updateVisit: (id: string, updateVisitRequest: UpdateVisitRequest, options?: RequestInit) => Promise<Visit>;
export declare const getUpdateVisitMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateVisit>>, TError, {
        id: string;
        data: BodyType<UpdateVisitRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateVisit>>, TError, {
    id: string;
    data: BodyType<UpdateVisitRequest>;
}, TContext>;
export type UpdateVisitMutationResult = NonNullable<Awaited<ReturnType<typeof updateVisit>>>;
export type UpdateVisitMutationBody = BodyType<UpdateVisitRequest>;
export type UpdateVisitMutationError = ErrorType<unknown>;
/**
* @summary Update a visit record
*/
export declare const useUpdateVisit: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateVisit>>, TError, {
        id: string;
        data: BodyType<UpdateVisitRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateVisit>>, TError, {
    id: string;
    data: BodyType<UpdateVisitRequest>;
}, TContext>;
export declare const getListAddressesUrl: (params?: ListAddressesParams) => string;
/**
 * @summary Search addresses (offline-cacheable)
 */
export declare const listAddresses: (params?: ListAddressesParams, options?: RequestInit) => Promise<Address[]>;
export declare const getListAddressesQueryKey: (params?: ListAddressesParams) => readonly ["/api/addresses", ...ListAddressesParams[]];
export declare const getListAddressesQueryOptions: <TData = Awaited<ReturnType<typeof listAddresses>>, TError = ErrorType<unknown>>(params?: ListAddressesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAddresses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAddresses>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAddressesQueryResult = NonNullable<Awaited<ReturnType<typeof listAddresses>>>;
export type ListAddressesQueryError = ErrorType<unknown>;
/**
 * @summary Search addresses (offline-cacheable)
 */
export declare function useListAddresses<TData = Awaited<ReturnType<typeof listAddresses>>, TError = ErrorType<unknown>>(params?: ListAddressesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAddresses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateAddressUrl: () => string;
/**
 * @summary Add a new address
 */
export declare const createAddress: (createAddressRequest: CreateAddressRequest, options?: RequestInit) => Promise<Address>;
export declare const getCreateAddressMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAddress>>, TError, {
        data: BodyType<CreateAddressRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAddress>>, TError, {
    data: BodyType<CreateAddressRequest>;
}, TContext>;
export type CreateAddressMutationResult = NonNullable<Awaited<ReturnType<typeof createAddress>>>;
export type CreateAddressMutationBody = BodyType<CreateAddressRequest>;
export type CreateAddressMutationError = ErrorType<unknown>;
/**
* @summary Add a new address
*/
export declare const useCreateAddress: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAddress>>, TError, {
        data: BodyType<CreateAddressRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createAddress>>, TError, {
    data: BodyType<CreateAddressRequest>;
}, TContext>;
export declare const getUpdateAddressUrl: (id: string) => string;
/**
 * @summary Update address details
 */
export declare const updateAddress: (id: string, updateAddressRequest: UpdateAddressRequest, options?: RequestInit) => Promise<Address>;
export declare const getUpdateAddressMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAddress>>, TError, {
        id: string;
        data: BodyType<UpdateAddressRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAddress>>, TError, {
    id: string;
    data: BodyType<UpdateAddressRequest>;
}, TContext>;
export type UpdateAddressMutationResult = NonNullable<Awaited<ReturnType<typeof updateAddress>>>;
export type UpdateAddressMutationBody = BodyType<UpdateAddressRequest>;
export type UpdateAddressMutationError = ErrorType<unknown>;
/**
* @summary Update address details
*/
export declare const useUpdateAddress: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAddress>>, TError, {
        id: string;
        data: BodyType<UpdateAddressRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAddress>>, TError, {
    id: string;
    data: BodyType<UpdateAddressRequest>;
}, TContext>;
export declare const getUpdateLocationUrl: () => string;
/**
 * @summary Report operator current location
 */
export declare const updateLocation: (updateLocationRequest: UpdateLocationRequest, options?: RequestInit) => Promise<SuccessResponse>;
export declare const getUpdateLocationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateLocation>>, TError, {
        data: BodyType<UpdateLocationRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateLocation>>, TError, {
    data: BodyType<UpdateLocationRequest>;
}, TContext>;
export type UpdateLocationMutationResult = NonNullable<Awaited<ReturnType<typeof updateLocation>>>;
export type UpdateLocationMutationBody = BodyType<UpdateLocationRequest>;
export type UpdateLocationMutationError = ErrorType<unknown>;
/**
* @summary Report operator current location
*/
export declare const useUpdateLocation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateLocation>>, TError, {
        data: BodyType<UpdateLocationRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateLocation>>, TError, {
    data: BodyType<UpdateLocationRequest>;
}, TContext>;
export declare const getListOperatorLocationsUrl: (params?: ListOperatorLocationsParams) => string;
/**
 * @summary Get live locations of all operators (admin view)
 */
export declare const listOperatorLocations: (params?: ListOperatorLocationsParams, options?: RequestInit) => Promise<OperatorLocation[]>;
export declare const getListOperatorLocationsQueryKey: (params?: ListOperatorLocationsParams) => readonly ["/api/location/operators", ...ListOperatorLocationsParams[]];
export declare const getListOperatorLocationsQueryOptions: <TData = Awaited<ReturnType<typeof listOperatorLocations>>, TError = ErrorType<unknown>>(params?: ListOperatorLocationsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listOperatorLocations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listOperatorLocations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListOperatorLocationsQueryResult = NonNullable<Awaited<ReturnType<typeof listOperatorLocations>>>;
export type ListOperatorLocationsQueryError = ErrorType<unknown>;
/**
 * @summary Get live locations of all operators (admin view)
 */
export declare function useListOperatorLocations<TData = Awaited<ReturnType<typeof listOperatorLocations>>, TError = ErrorType<unknown>>(params?: ListOperatorLocationsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listOperatorLocations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAdminDashboardUrl: (params?: GetAdminDashboardParams) => string;
/**
 * @summary Office admin dashboard summary
 */
export declare const getAdminDashboard: (params?: GetAdminDashboardParams, options?: RequestInit) => Promise<AdminDashboard>;
export declare const getGetAdminDashboardQueryKey: (params?: GetAdminDashboardParams) => readonly ["/api/dashboard/admin", ...GetAdminDashboardParams[]];
export declare const getGetAdminDashboardQueryOptions: <TData = Awaited<ReturnType<typeof getAdminDashboard>>, TError = ErrorType<unknown>>(params?: GetAdminDashboardParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminDashboard>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminDashboardQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminDashboard>>>;
export type GetAdminDashboardQueryError = ErrorType<unknown>;
/**
 * @summary Office admin dashboard summary
 */
export declare function useGetAdminDashboard<TData = Awaited<ReturnType<typeof getAdminDashboard>>, TError = ErrorType<unknown>>(params?: GetAdminDashboardParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetOperatorDashboardUrl: () => string;
/**
 * @summary Field operator daily dashboard
 */
export declare const getOperatorDashboard: (options?: RequestInit) => Promise<OperatorDashboard>;
export declare const getGetOperatorDashboardQueryKey: () => readonly ["/api/dashboard/operator"];
export declare const getGetOperatorDashboardQueryOptions: <TData = Awaited<ReturnType<typeof getOperatorDashboard>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOperatorDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getOperatorDashboard>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetOperatorDashboardQueryResult = NonNullable<Awaited<ReturnType<typeof getOperatorDashboard>>>;
export type GetOperatorDashboardQueryError = ErrorType<unknown>;
/**
 * @summary Field operator daily dashboard
 */
export declare function useGetOperatorDashboard<TData = Awaited<ReturnType<typeof getOperatorDashboard>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOperatorDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetDailyReportUrl: (params?: GetDailyReportParams) => string;
/**
 * @summary Daily operations report
 */
export declare const getDailyReport: (params?: GetDailyReportParams, options?: RequestInit) => Promise<DailyReport>;
export declare const getGetDailyReportQueryKey: (params?: GetDailyReportParams) => readonly ["/api/reports/daily", ...GetDailyReportParams[]];
export declare const getGetDailyReportQueryOptions: <TData = Awaited<ReturnType<typeof getDailyReport>>, TError = ErrorType<unknown>>(params?: GetDailyReportParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDailyReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDailyReport>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDailyReportQueryResult = NonNullable<Awaited<ReturnType<typeof getDailyReport>>>;
export type GetDailyReportQueryError = ErrorType<unknown>;
/**
 * @summary Daily operations report
 */
export declare function useGetDailyReport<TData = Awaited<ReturnType<typeof getDailyReport>>, TError = ErrorType<unknown>>(params?: GetDailyReportParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDailyReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetSummaryReportUrl: (params?: GetSummaryReportParams) => string;
/**
 * @summary Aggregated summary report (weekly/monthly/annual)
 */
export declare const getSummaryReport: (params?: GetSummaryReportParams, options?: RequestInit) => Promise<SummaryReport>;
export declare const getGetSummaryReportQueryKey: (params?: GetSummaryReportParams) => readonly ["/api/reports/summary", ...GetSummaryReportParams[]];
export declare const getGetSummaryReportQueryOptions: <TData = Awaited<ReturnType<typeof getSummaryReport>>, TError = ErrorType<unknown>>(params?: GetSummaryReportParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSummaryReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSummaryReport>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSummaryReportQueryResult = NonNullable<Awaited<ReturnType<typeof getSummaryReport>>>;
export type GetSummaryReportQueryError = ErrorType<unknown>;
/**
 * @summary Aggregated summary report (weekly/monthly/annual)
 */
export declare function useGetSummaryReport<TData = Awaited<ReturnType<typeof getSummaryReport>>, TError = ErrorType<unknown>>(params?: GetSummaryReportParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSummaryReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetOperatorProductivityReportUrl: (params: GetOperatorProductivityReportParams) => string;
/**
 * @summary Operator productivity report
 */
export declare const getOperatorProductivityReport: (params: GetOperatorProductivityReportParams, options?: RequestInit) => Promise<OperatorProductivity[]>;
export declare const getGetOperatorProductivityReportQueryKey: (params?: GetOperatorProductivityReportParams) => readonly ["/api/reports/operators", ...GetOperatorProductivityReportParams[]];
export declare const getGetOperatorProductivityReportQueryOptions: <TData = Awaited<ReturnType<typeof getOperatorProductivityReport>>, TError = ErrorType<unknown>>(params: GetOperatorProductivityReportParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOperatorProductivityReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getOperatorProductivityReport>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetOperatorProductivityReportQueryResult = NonNullable<Awaited<ReturnType<typeof getOperatorProductivityReport>>>;
export type GetOperatorProductivityReportQueryError = ErrorType<unknown>;
/**
 * @summary Operator productivity report
 */
export declare function useGetOperatorProductivityReport<TData = Awaited<ReturnType<typeof getOperatorProductivityReport>>, TError = ErrorType<unknown>>(params: GetOperatorProductivityReportParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOperatorProductivityReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map