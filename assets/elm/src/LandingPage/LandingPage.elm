module LandingPage.LandingPage exposing (..)

import DetailsModal
import Html exposing (..)
import Html.Attributes exposing (class)
import LandingPage.State exposing (Model)
import Messages exposing (..)
import ModuleCatalog
import Path
import Search


view : Model -> Html.Html Messages.Msg
view model =
    Html.div []
        [ columns
            [ Path.view model.selectedLessons
            , ModuleCatalog.view (Search.forTerm model.search model.lessons)
            ]
        , DetailsModal.view model.modal
        ]


columns : List (Html.Html Msg) -> Html.Html Messages.Msg
columns elements =
    Html.div [ class "columns" ] elements
