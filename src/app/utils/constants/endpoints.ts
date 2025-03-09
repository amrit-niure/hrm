export const ENDPOINTS = {
    SIGN_UP: "/auth/local/signup_user",
    SIGN_UP_PROVIDER: "/auth/local/signup_provider",
    SIGN_IN: "/auth/local/signin",
    SIGN_IN_PROVIDER:"/auth/local/signin",
    LOGIN_GOOGLE: "/auth/google",
    LOGIN_LINKEDIN: "/auth/linkedin",
    LOG_OUT: "/auth/logout",
    GET_TOTAL_JOBS: "/job-detail/total-jobs",
    GET_PAYMENT_DETAIL: "/payment/detail",
    GET_PAYMENT: "/payment",
    GET_SLIDER_ENDPOINT: "/slider",
    GET_JOBSKILL: "/jobskill",
    GET_COUNTRY: "/country",
    GET_COMPANY: "/company",
    GET_DESIGNATION: "/designation",
    GET_EDUCATION: "/education",
    GET_CATEGORY: "/category",
    GET_JOB: "/job-detail",
    GET_JOB_FEATURED: "/job-detail/featured",
    GET_JOB_RECENT: "/job-detail/recent",
    GET_JOB_CATEGORY: "/job-detail/category",
    GET_JOB_SAVED: "/job-detail/savedJobs",
    GET_JOB_APPLICATION: "/job-detail/applicationSend",
    GET_JOB_DETAIL: "/job-detail/",
    GET_USER: "/auth/user",
    GET_GOOGLE_RESPONSE: "/auth/google",
    GET_TRUSTED_CLIENTS: "/trusted-clients",
    GET_SEARCH_CATEGORY: "/job-detail/category",
    GET_PROFILE: "/profile",
    GET_JOB_WITH_FLAG: "/job-detail/myjobs/",
    GET_APPLICATION_COMMENTS: "/user-comments",
    GET_TOP_FIVE_JOB_TITLE: "/job-detail/topList",
    GET_APPLICATION_WITH_FLAG: "/user-application/myApplicants/",
    GET_JOB_LIST_COUNT: "/job-detail/count",
    GET_APPLICATION_LIST_COUNT: "/user-application/count",
    GET_JOB_BY_COMPANY: "/job-detail/company",
    GET_USER_APPLIED_STATUS: "/user-application/applied-status",
    GET_COMPANY_PROFILE: "/profile/company",
    GET_SEARCH: "/job-detail/search",
    GET_USER_NOTIFICATION: "/notification",
    POST_PAYMENT_DETAIL: "/payment/save",
    POST_SEARCH_DATA: "/search-data",
    POST_COMPANY_PROFILE: "/company-profile",
    POST_JOB: "/job-detail",
    POST_JOB_APPLICATION: "/user-application",
    ADD_TO_FAVORITE: "/user-saved-jobs",
    POST_COMPANY_DETAILS: "/profile/company-details/",
    POST_CHANGE_PASSWORD: "/auth/change_password",
    SEND_RESET_LINK: "/auth/forgot-password",
    FORGOT_CHANGE_PASSWORD: "/auth/change-password",
    BLOG_CATEGORY: "/blog-category",
    BLOG_POST: "/blog-post",
    CHECK_OLD_PASS: "/auth/check-old",
    TRENDING_JOB: "/trending-job",
    TRENDING_LOCATION: "/trending-location",
    TRENDING_COMPANY: "/trending-company",
    TRENDING_JOBS_SEARCH: "/job-detail/trending/jobTitle",
    TRENDING_LOCATION_SEARCH: "/job-detail/trending/location",
    TRENDING_COMPANY_SEARCH: "/job-detail/trending/company",
    USER_DETAIL: "/auth",
    USER_EDUCATION: "/user-education",
    USER_SKILL: "/user-skill",
    USER_EXTRA_SKILL: "/user-extra-skill",
    USER_EXPERIENCE: "/user-experience",
    USER_RESUME: "/user-resume",
    JOB_APPLICANTS: "/user-application/myjobs",
    JOB_APPLICANTS_WITH_ID: "/user-application/",
    LATEST_FIVE_JOBS: "/job-detail/five-jobs",
    LATEST_FIVE_APPLICANTS: "/user-application/five-applicants",
    UPDATE_PERSONAL_SUMMARY: "/profile/personal-summary",
    UPDATE_LANGUAGE: "/profile/language",
    UPDATE_PROFILE_PIC: "/profile/pic",
    CHANGE_JOB_FLAG: "/job-detail/changeStatus/",
    CHANGE_APPLICATIONS_FLAG: "/user-application/changeStatus/",
    CONTACT_US: "/email/contact-us",
    VERIFY_CAPTCHA: "/recaptcha/verify",
    CHECK_PIN_VALIDITY: "/auth/check-pin",
    ORG_CATEGORY: "/org-category",
    DISCOUNTS: "/discounts",
  } as const;