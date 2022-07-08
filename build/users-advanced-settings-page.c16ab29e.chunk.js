"use strict";
(self["webpackChunkstrapi_socket"] = self["webpackChunkstrapi_socket"] || []).push([[9460],{

/***/ 93084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdvancedSettings)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(79835);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/LiveRegions.js
var LiveRegions = __webpack_require__(67422);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(2632);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js
var permissions = __webpack_require__(51725);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(42722);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/layout.js

const layout = [
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email"),
      defaultMessage: "One account per email address"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email"),
      defaultMessage: "Disallow the user to create multiple accounts using the same email address with different authentication providers."
    },
    name: "unique_email",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.sign-up"),
      defaultMessage: "Enable sign-ups"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.sign-up"),
      defaultMessage: "When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."
    },
    name: "allow_register",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email-reset-password"),
      defaultMessage: "Reset password page"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email-reset-password"),
      defaultMessage: "URL of your application's reset password page."
    },
    placeholder: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.placeholder.email-reset-password"),
      defaultMessage: "ex: https://youtfrontend.com/reset-password"
    },
    name: "email_reset_password",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email-confirmation"),
      defaultMessage: "Enable email confirmation"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email-confirmation"),
      defaultMessage: "When enabled (ON), new registered users receive a confirmation email."
    },
    name: "email_confirmation",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),
      defaultMessage: "Redirection url"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),
      defaultMessage: "After you confirmed your email, choose where you will be redirected."
    },
    placeholder: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),
      defaultMessage: "ex: https://youtfrontend.com/email-confirmation"
    },
    name: "email_confirmation_redirection",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  }
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/schema.js


const URL_REGEX = new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))");
const schema = yup_lib/* object */.Ry().shape({
  email_confirmation_redirection: yup_lib/* mixed */.nK().when("email_confirmation", {
    is: true,
    then: yup_lib/* string */.Z_().matches(URL_REGEX).required(),
    otherwise: yup_lib/* string */.Z_().nullable()
  }),
  email_reset_password: yup_lib/* string */.Z_(build.translatedErrors.string).matches(URL_REGEX, build.translatedErrors.regex).nullable()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/api.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const fetchData = () => __async(void 0, null, function* () {
  const { data } = yield utils/* axiosInstance.get */.be.get((0,utils/* getRequestURL */.Gc)("advanced"));
  return data;
});
const putAdvancedSettings = (body) => {
  return utils/* axiosInstance.put */.be.put((0,utils/* getRequestURL */.Gc)("advanced"), body);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var AdvancedSettings_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




















const ProtectedAdvancedSettingsPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
  permissions: permissions/* default.readAdvancedSettings */.Z.readAdvancedSettings
}, /* @__PURE__ */ react.createElement(AdvancedSettingsPage, null));
const AdvancedSettingsPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const { notifyStatus } = (0,LiveRegions.useNotifyAT)();
  const queryClient = (0,lib.useQueryClient)();
  (0,build.useFocusWhenNavigate)();
  const updatePermissions = (0,react.useMemo)(() => ({ update: permissions/* default.updateAdvancedSettings */.Z.updateAdvancedSettings }), []);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,build.useRBAC)(updatePermissions);
  const { status: isLoadingData, data } = (0,lib.useQuery)("advanced", () => fetchData(), {
    onSuccess: () => {
      notifyStatus(formatMessage({
        id: (0,utils/* getTrad */.OB)("Form.advancedSettings.data.loaded"),
        defaultMessage: "Advanced settings data has been loaded"
      }));
    },
    onError: () => {
      toggleNotification({
        type: "warning",
        message: { id: (0,utils/* getTrad */.OB)("notification.error"), defaultMessage: "An error occured" }
      });
    }
  });
  const isLoading = isLoadingForPermissions || isLoadingData !== "success";
  const submitMutation = (0,lib.useMutation)((body) => putAdvancedSettings(body), {
    onSuccess: () => AdvancedSettings_async(void 0, null, function* () {
      yield queryClient.invalidateQueries("advanced");
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.OB)("notification.success.saved"), defaultMessage: "Saved" }
      });
      unlockApp();
    }),
    onError: () => {
      toggleNotification({
        type: "warning",
        message: { id: (0,utils/* getTrad */.OB)("notification.error"), defaultMessage: "An error occured" }
      });
      unlockApp();
    },
    refetchActive: true
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = (body) => AdvancedSettings_async(void 0, null, function* () {
    lockApp();
    const urlConfirmation = body.email_confirmation ? body.email_confirmation_redirection : "";
    yield submitMutation.mutateAsync(__spreadProps(__spreadValues({}, body), { email_confirmation_redirection: urlConfirmation }));
  });
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main.Main, {
      "aria-busy": "true"
    }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
      name: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
        defaultMessage: "Advanced Settings"
      })
    }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
        defaultMessage: "Advanced Settings"
      })
    }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": isSubmittingForm
  }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: formatMessage({
      id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
      defaultMessage: "Advanced Settings"
    })
  }), /* @__PURE__ */ react.createElement(dist.Formik, {
    onSubmit: handleSubmit,
    initialValues: data.settings,
    validateOnChange: false,
    validationSchema: utils_schema,
    enableReinitialize: true
  }, ({ errors, values, handleChange, isSubmitting }) => {
    return /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
        defaultMessage: "Advanced Settings"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
        loading: isSubmitting,
        type: "submit",
        disabled: !canUpdate,
        startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
        size: "L"
      }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
    }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Box.Box, {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    }, /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 4
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "delta",
      as: "h2"
    }, formatMessage({
      id: "global.settings",
      defaultMessage: "Settings"
    })), /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 6
    }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 6,
      s: 12
    }, /* @__PURE__ */ react.createElement(Select.Select, {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("EditForm.inputSelect.label.role"),
        defaultMessage: "Default role for authenticated users"
      }),
      value: values.default_role,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("EditForm.inputSelect.description.role"),
        defaultMessage: "It will attach the new authenticated user to the selected role."
      }),
      onChange: (e) => handleChange({ target: { name: "default_role", value: e } })
    }, data.roles.map((role) => {
      return /* @__PURE__ */ react.createElement(Select.Option, {
        key: role.type,
        value: role.type
      }, role.name);
    }))), utils_layout.map((input) => {
      let value = values[input.name];
      if (!value) {
        value = input.type === "bool" ? false : "";
      }
      return /* @__PURE__ */ react.createElement(Grid.GridItem, __spreadValues({
        key: input.name
      }, input.size), /* @__PURE__ */ react.createElement(build.GenericInput, __spreadProps(__spreadValues({}, input), {
        value,
        error: errors[input.name],
        disabled: input.name === "email_confirmation_redirection" && values.email_confirmation === false,
        onChange: handleChange
      })));
    }))))));
  }));
};
/* harmony default export */ const AdvancedSettings = (ProtectedAdvancedSettingsPage);


/***/ })

}]);