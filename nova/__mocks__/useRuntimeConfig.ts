export function mockUseRuntimeConfig() {
  return {
    public: {
      AUTH_TOKEN: "test-token",
      CONTENT_COMMAND_SERVICE_BASE_URL: "test-url",
      CONTENT_MASTER_DATA_SERVICE_BASE_URL: "content-master-data-test-url",
      CONTENT_QUERY_SERVICE_BASE_URL: "content-query-test-url",
      EXPERIENCE_RAW_SERVICE_BASE_URL: "test-url",
      EXPERIENCE_MASTER_DATA_SERVICE_BASE_URL: "test-url",
      METADATA_EXPERIENCE_SERVICE_BASE_URL: "test-url",
    },
    app: {},
  };
}
