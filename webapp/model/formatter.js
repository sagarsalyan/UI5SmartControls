sap.ui.define(function () {
        return {
              StockStatus: function (iNo) {
                     if (iNo < 50) {
                           return sap.ui.core.ValueState.Error;
                      } else {
                            return sap.ui.core.ValueState.Success;
                    }
               }
       };
});