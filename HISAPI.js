import React from 'react';
import axios from "axios";
import Cookie from "js-cookie";
import { cacheAdapterEnhancer } from "axios-extensions";
import { useDispatch } from "reactn";
// import { useSnackbar } from "notistack";

export default class HITSAPI {
    constructor(report = false) {
        // eslint-disable-next-line no-unused-vars
        // const [loading, setLoading] = useGlobal("loading");

        // customized
        // const action = key => (
        //     <Button
        //         onClick={() => {
        //             closeSnackbar(key);
        //         }}
        //         style={{ color: "white" }}
        //     >
        //         Dismiss
        //     </Button>
        // );

        const addLoadingStact = (count, n) => {
            return count + n;
        };
        const dispatchLoadingStack = useDispatch(addLoadingStact, "loading");

        const token = Cookie.get("token") ? Cookie.get("token") : "";

        // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

        let baseURL = "http://192.168.20.47:5000";  //หอ
        // let baseURL = "http://192.168.137.160:5000"; //พี่ครีม
        // let baseURL = "http://192.168.137.98:5000";  //พี่กล๊อฟ
        // let baseURL = "http://192.168.137.151:5000"; //พี่เท่
        // if (report) {
        //     baseURL += "/report";
        // } else {
        //     baseURL += "/api";
        // }

        this.axios = axios.create({
            baseURL: baseURL,
            headers: {
                Authorization: "Bearer " + token,
                "Cache-Control": "no-cache"
            },
            // disable the default cache and set the cache flag
            adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
                enabledByDefault: false,
                cacheFlag: "useCache"
            })
        });

        this.axios.interceptors.request.use(
            function(config) {
                // Do something before request is sent
                dispatchLoadingStack(1);
                return config;
            },
            function(error) {
                // Do something with request error
                // dispatchLoadingStack(-1);

                // console.log(error);
                // enqueueSnackbar("Cannot connect to server", {
                //     variant: "error"
                // });

                return Promise.reject(error);
            }
        );

        this.axios.interceptors.response.use(
            function(response) {
                // Do something with response data
                dispatchLoadingStack(-1);
                return response;
            },
            function(error) {
                // Do something with response error
                dispatchLoadingStack(-1);

                console.log(error);
                console.log(error.response);
                let errorMsg = "";
                if (
                    error.response !== null &&
                    error.response !== undefined &&
                    error.response.data !== null &&
                    error.response.data !== undefined
                ) {
                    if (error.response.status === 401) {
                        errorMsg = "Unauthorized";
                    } else if (error.response.status === 400) {
                        if (
                            error.response.data.errors !== null &&
                            error.response.data.errors !== undefined &&
                            error.response.data.errors !== ""
                        ) {
                            errorMsg = error.response.data.errors.message;
                        } else if (
                            error.response.data.messageID !== null &&
                            error.response.data.messageID !== undefined &&
                            error.response.data.messageID !== ""
                        ) {
                            errorMsg = error.response.data.messageID;
                        } else if (
                            error.response.data.importErrorMessage !== null &&
                            error.response.data.importErrorMessage !==
                                undefined &&
                            error.response.data.importErrorMessage !== ""
                        ) {
                            errorMsg = error.response.data.importErrorMessage;
                        } else if (
                            error.response.data.validationResults !== null &&
                            error.response.data.validationResults !==
                                undefined &&
                            error.response.data.validationResults.length > 0
                        ) {
                            for (const validation of error.response.data
                                .validationResults) {
                                if (errorMsg !== "") {
                                    errorMsg += "\n";
                                }
                                errorMsg += validation.errorMessage;
                            }
                        }
                    } else if (error.response.status === 404) {
                        errorMsg = `Cannot connect to server 404`;
                    } else if (error.response.status === 500) {
                        if (
                            error.response.data.internalErrorID !== null &&
                            error.response.data.internalErrorID !== undefined &&
                            error.response.data.internalErrorID !== ""
                        ) {
                            errorMsg = `Internal server error : ${error.response.data.internalErrorID}`;
                        }

                        if (
                            error.response.data.errors !== null &&
                            error.response.data.errors !== undefined &&
                            error.response.data.errors !== ""
                        ) {
                            errorMsg = error.response.data.errors.message;
                        }
                    } else if (error.response.status === 502) {
                        errorMsg = `Cannot connect to server`;
                    }
                }

                console.log(errorMsg);
                // if (errorMsg !== "") {
                //     enqueueSnackbar(errorMsg, {
                //         variant: "error",
                //         style: { whiteSpace: "pre-line" },
                //         persist: true,
                //         action
                //     });
                // }

                return Promise.reject(error);
            }
        );
    }
}
